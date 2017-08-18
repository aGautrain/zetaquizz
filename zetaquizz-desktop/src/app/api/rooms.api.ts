import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Api, ZetaPushClient, createApi } from 'zetapush-angular';

import { ServerRoom, ServerMember, ServerJoinRequest, ServerLeaveRequest } from '../services/room.interfaces';


export class RoomApi extends Api {
    onListRooms: Observable<Array<ServerRoom>>;
    onJoinRoom: Observable<Array<ServerMember>>;

    listRooms({}) {
        return this.$publish('listRooms', {});
    }

    // For some macros a Promise has more sense

    joinRoom({id}:{id: string}): Promise<ServerJoinRequest> {
        return this.$publish('joinRoom', {id});
    }

    leaveRoom({id}:{id: string}): Promise<ServerLeaveRequest> {
        return this.$publish('leaveRoom', {id});
    }

    createRoom({
        name,
        password,
        delay,
        questions,
        chronomode
    }:{
        name: string,
        password: string,
        delay: number,
        questions: number,
        chronomode: boolean
    }): Promise<ServerRoom> {
        return this.$publish('createRoom', {name, password, delay, questions, chronomode});
    }

    createCustomRoom({
        name,
        password,
        delay,
        chronomode,
        seed
    }:{
        name: string,
        password: string,
        delay: number,
        chronomode: boolean,
        seed: string
    }): Promise<ServerRoom> {
        return this.$publish('createCustomRoom', {name, password, delay, chronomode, seed});
    }

    detailRoomMember({userKey}:{userKey: string}): Promise<ServerMember> {
        return this.$publish('detailRoomMember', {userKey});
    }

    answerQuestion({room, givenAnswer}: {room: string, givenAnswer: string}) {
        return this.$publish('answerQuestion', {room, givenAnswer});
    }
}

export function RoomApiFactory(client: ZetaPushClient, zone: NgZone): RoomApi {
    return createApi(client, zone, RoomApi) as RoomApi;
}

export const RoomApiProvider = {
    provide: RoomApi,
    useFactory: RoomApiFactory,
    deps: [ ZetaPushClient, NgZone ]
}
