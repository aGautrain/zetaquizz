import { Pipe, PipeTransform } from '@angular/core';


import { ServerRoom } from './room.interfaces';

@Pipe({ name: 'canJoin' })
export class isOpenPipe implements PipeTransform {
  transform(rooms: ServerRoom[]) {
    return rooms.filter(room => room.metadata.open === true);
  }
}

@Pipe({ name: 'cantJoin' })
export class isClosedPipe implements PipeTransform {
  transform(rooms: ServerRoom[]) {
    return rooms.filter(room => room.metadata.open === false && room.metadata.progressMaxQ !== room.metadata.progressCurrentQ);
  }
}
