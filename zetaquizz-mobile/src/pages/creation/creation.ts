import { Component } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { Game } from '../game/game';

import { RoomService } from '../../services/rooms.service';

@Component({
    selector: 'page-creation',
    templateUrl: 'creation.html',
})
export class Creation {

    roomName: string = "";
    roomDelay: number = 30;
    roomQuestions: number = 5;
    roomPass: string = "";

    constructor(public navCtrl: NavController,
                public loadingCtrl: LoadingController,
                public navParams: NavParams,
                private roomService: RoomService) {

        }

        createRoom() {
            let waiting = this.loadingCtrl.create({
                content: "Waiting for creation ...",
                duration: 10000
            });
            waiting.present();

            this.roomService.create(this.roomName, this.roomPass, Math.floor(this.roomDelay), Math.floor(this.roomQuestions)).then(
                result => {
                    this.navCtrl.pop();
                    this.navCtrl.setRoot(Game, {data: result['room']});
                    setTimeout(() => {
                        waiting.dismiss();
                    }, 300);
                },
                error => {
                    console.log('error happend');
                }
            );

        }

    }
