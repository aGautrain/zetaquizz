import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ZetaPushConnection, ZetaPushClient } from 'zetapush-angular';
import { ServerRoom } from './../services/room.interfaces';
import { RoomService } from './../services/rooms.service';

import { Message } from 'primeng/primeng';
import { RoomComponent } from './../room/room.component';

@Component({
    selector: 'app-lobby',
    templateUrl: './lobby.component.html',
    styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit, OnDestroy {

    msgs: Message[] = [];
    existingRooms: Array<ServerRoom>;
    roomsSubscription: any = false;
    membersSubscription: any = false;
    goingToCreation: boolean = false;

    constructor(private roomService: RoomService,
                private router: Router,
                private zpConnection: ZetaPushConnection,
                private zpClient: ZetaPushClient) {

        if(!this.zpClient.isConnected()){
            this.redirectLogin();
        }

    }

    ngOnInit() {

        if(this.zpClient.isConnected()){

            this.roomsSubscription = this.roomService.rooms.subscribe(
                result => {
                    this.existingRooms = result;
                }
            );

            this.membersSubscription = this.roomService.roomMembers.subscribe(
                result => {
                    console.debug("ROOM > MEMBERS UPDATED ", result);
                }
            );

            this.roomService.list();

        }

    }

    // When joining a room
    joinRoom(data: ServerRoom): boolean {

        // 1°) Check if open
        if(data.metadata.open){

            // 2°) Check if private
            if(data.metadata.needPassword){

                // If so, ask for password
                let pass: string = prompt('Password ?');

                // And check it matches the room password
                if(pass !== data.metadata.password){
                    console.log('INPUT > WRONG PASSWORD');
                    alert('Wrong password !');
                    return false;
                }

            }

            // 3°) Joining the room
            this.roomService.join(data.id).then(
                result => {
                    if(result.isOpen){
                        // 4°) Room well joined
                        this.router.navigate(['/game', JSON.stringify(data)]);
                        return true;
                    } else {
                        // Room not joinable anymore
                        this.roomService.joinLobby();
                        this.roomService.list();
                        return false;
                    }
                },
                error => {
                    // Error joining room
                    return false;
                }
            );
        } else {
            return false;
        }

    }

    getOpenRooms(): Array<ServerRoom> {
        return this.existingRooms.filter(room => room.metadata.open);
    }

    thereIsRoomAvailable(): boolean {
        return (this.getOpenRooms().length > 0);
    }


    // When the user would like to create his own room
    hostRoom() {
        this.goingToCreation = true;
        this.router.navigate(['/creation']);
    }

    // called  when user wants to disconnect
    quitApp() {

        this.roomService.leaveLobby().then(
            () => {
                this.zpConnection.disconnect();
                this.router.navigate(['/']);
            }
        );
    }

    // called when not logged in
    redirectLogin() {
        this.router.navigate(['/login']);
    }

    ngOnDestroy() {

        // unsubscribe the different observables

        if(this.membersSubscription){
            this.membersSubscription.unsubscribe();
        }

        if(this.roomsSubscription){
            this.roomsSubscription.unsubscribe();
        }

        // Except when creating a room, we leave lobby
        if(this.zpClient.isConnected() && !this.goingToCreation){
            this.roomService.leaveLobby();
        }
    }

}
