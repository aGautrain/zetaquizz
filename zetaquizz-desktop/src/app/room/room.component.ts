import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ServerRoom } from './../services/room.interfaces';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {

    @Input() room: ServerRoom;
    @Input() isLast: boolean;
    @Output() onJoin: EventEmitter<ServerRoom> = new EventEmitter<ServerRoom>();


    gameEnded(current, max): boolean {
        return current === max;
    }

    getSinceTime(): string {
        let now: number = + new Date();
        // parsing the delta in minutes
        let since: number = Math.round((now - this.room.metadata.createdAt) / 60000);

        if(since > 59){
            since = Math.round(since / 60);
            let plural: string;
            since > 1 ? plural = "s" : plural = "";
            return "Il y a " + since + " heure" + plural;
        } else {
            let plural: string;
            since > 1 ? plural = "s" : plural = "";
            return "Il y a " + since + " minute" + plural;
        }

    }

    randomColor(): string {
        return 'quizz-item--red';
    }

    join() {
        this.onJoin.emit(this.room);
    }

    isBlocked(): boolean {
        return !this.room.metadata.open;
    }

}
