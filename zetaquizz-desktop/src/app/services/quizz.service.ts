import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { services } from 'zetapush-js';
import { ZetaPushClient } from 'zetapush-angular';

import { RoomApi } from '../api/rooms.api';
import { ServerCommunication, ServerQuestion, ServerScore } from './quizz.interfaces';

@Injectable()
export class QuizzService {

    private _questions: Subject<ServerCommunication>;
    public questions: Observable<ServerCommunication>;
    public listener: any;

    private _scores:Subject<Array<ServerScore>>;
    public scores: Observable<Array<ServerScore>>;

    private _notifs: Subject<ServerCommunication>;
    public notifs: Observable<ServerCommunication>;

    private listen: boolean = false;

    constructor(private roomApi: RoomApi, private zpClient: ZetaPushClient) {
        this.listen = false;
    }

    open() {

        this.listen = true;

        this._questions = new Subject();
        this.questions = this._questions.asObservable();

        this._scores = new Subject();
        this.scores = this._scores.asObservable();

        this._notifs = new Subject();
        this.notifs = this._notifs.asObservable();

        // Adding a listener
        this.listener = this.zpClient.createService({
            Type: services['Messaging'],
            listener: {
                message: (message) => {
                    console.debug('Received from server the following : ', message['data']['data']);

                    const communication: ServerCommunication = message['data']['data'];

                    switch(communication['type']){

                        case 'question':
                            shuffle(communication.content.answers);
                            this._questions.next(communication);
                            break;

                        case 'notification':
                            console.log('received a notif');
                            this._notifs.next(communication);
                            break;

                        case 'scores':
                            this._scores.next(communication['content']);
                            break;

                        case 'complete':
                            this._questions.complete();
                            break;

                        default:
                            console.log('Type of the communication unknown');
                            break;
                    }
                },
                error: (error) => {
                    console.error(error);
                }
            }
        });
    }

    close() {
        // Deleting the listener
        if(this.listen){
            this.zpClient.unsubscribe(this.listener);
            this.listen = false;
        }

    }

    answer(room: string, given: string) {
        this.roomApi.answerQuestion({room: room, givenAnswer: given});
    }

}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
