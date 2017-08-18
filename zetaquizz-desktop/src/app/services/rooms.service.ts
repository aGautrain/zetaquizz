import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { services } from 'zetapush-js';
import { ZetaPushClient } from 'zetapush-angular';

import { ServerRoom, ServerMember, ServerJoinRequest, ServerLeaveRequest } from './room.interfaces';
import { RoomApi } from '../api/rooms.api';
import { Router } from '@angular/router';
/*
    RoomService
    * Gives access to several API calls and abstract them
    * Remembers who is present in our room
*/

@Injectable()
export class RoomService implements OnDestroy {

    private _rooms: BehaviorSubject<Array<ServerRoom>> = new BehaviorSubject([]);
    public readonly rooms: Observable<Array<ServerRoom>> = this._rooms.asObservable();
    private subscription_0: any;

    private _roomMembers: BehaviorSubject<Array<ServerMember>> = new BehaviorSubject([]);
    public readonly roomMembers: Observable<Array<ServerMember>> = this._roomMembers.asObservable();
    private listener: any;
    private subscription_1: any;

    // SETTING LISTENERS AND OBSERVABLES

    constructor(private router: Router, private api: RoomApi, private zpClient: ZetaPushClient) {

        // We add a listener for group presences
        this.listener = this.zpClient.createService({
            Type: services['GroupManagement'],
            deploymentId: 'cr_grp_groups',
            listener: {
                presence: (notif) => {
                    console.debug('PRESENCE > A presence has be notified', notif);

                    // Unfortunately we only have the key
                    var user: string = notif.data.user.owner;
                    let members: Array<ServerMember> = this._roomMembers.getValue();

                    /* if(this.zpClient.getUserId() === user){

                        // The notif is concerning the current user
                        this.zpClient.unsubscribe(this.listener);

                        this.zpClient.disconnect();

                        // Only one session at a time
                        console.log('LOGS > ONE SESSION MAXIMUM');
                        this.router.navigate(['/login']);

                    } else { */

                        // As the records can be Object(login, userKey) or Object(userKey)
                        let pos: number = this.find(members, user);

                        if(notif.data.presence === 'ON') {
                            // Someone joined in
                            if(pos == -1) {

                                // Not yet registered
                                this.getDetails(user).then(
                                    result => {
                                        let completeUser: ServerMember = result['member'];
                                        console.log('LOGS > USER JOINED OUR GROUP ', result['member']);
                                        members.push(completeUser);
                                        this._roomMembers.next(members);
                                    }
                                );
                                this.list();
                            } else {
                                console.log('LOGS > USER JOINED OUR GROUP WHILE ALREADY THERE');
                            }
                        } else {
                            // Someone left
                            if(pos != -1) {

                                console.log('LOGS > USER LEFT OUR GROUP ', members[pos]);

                                // Still a member
                                members.splice(pos, 1);
                                this._roomMembers.next(members);
                                this.list();
                            } else {
                                console.log('LOGS > USER LEFT OUR GROUP WHILE ALREADY OUT');
                            }
                        }
                    // }
                }
            }
        });



        // We transmit the list of the rooms
        this.subscription_0 = this.api.onListRooms.subscribe(
            result => {
                this._rooms.next(result['rooms']);
            },
            error => {
                // nothing
            }
        );

        // We transmit the members of the room
        this.subscription_1 = this.api.onJoinRoom.subscribe(
            result => {
                let members = result['members'].filter(this.hasLogin);
                this._roomMembers.next(members);
            },
            error => {
                // nothing
            }
        );

    }

    // END SETTING


    list(): void {
        this.api.listRooms({});
    }

    join(id: string): Promise<ServerJoinRequest> {
        // Not part of the lobby anymore
        // Can't be in two rooms at the same time
        return this.leaveLobby().then(
            res => {
                return this.api.joinRoom({id: id});
            },
            err => {
                return this.api.joinRoom({id: id});
            }
        );

    }

    leave(id: string): Promise<ServerLeaveRequest> {
        return this.api.leaveRoom({id: id});
    }

    joinLobby(): Promise<ServerJoinRequest> {
        return this.api.joinRoom({id:'secretLobbyId'});
    }

    create(name: string, password: string, delay: number, questions: number, chronomode: boolean): Promise<ServerRoom> {
        return this.api.createRoom({name: name, password: password, delay: delay, questions: questions, chronomode: chronomode});
    }

    createCustom(name: string, password: string, delay: number, chronomode: boolean, seed: string): Promise<ServerRoom> {
        return this.api.createCustomRoom({name: name, password: password, delay: delay, chronomode: chronomode, seed: seed});
    }

    getDetails(key: string): Promise<ServerMember> {
        return this.api.detailRoomMember({userKey:key});
    }

    private find(members: Array<ServerMember>, user: string): number {

        let found: number = -1;

        for(let i: number = 0; found === -1 && i < members.length; i++){

            if(members[i].userKey === user){
                found = i;
            }
        }

        return found;
    }

    private hasLogin(member: ServerMember): boolean {
        return (member.login != null);
    }

    leaveLobby(): Promise<ServerLeaveRequest> {
        return this.api.leaveRoom({id:'secretLobbyId'});
    }

    ngOnDestroy() {
        this.subscription_0.unsubscribe();
        this.subscription_1.unsubscribe();
        this.zpClient.unsubscribe(this.listener);
    }
}
