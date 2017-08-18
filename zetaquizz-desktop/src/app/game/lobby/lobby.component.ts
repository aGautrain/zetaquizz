import { Component, OnInit, Input } from '@angular/core';
import { ServerMember } from '../../services/room.interfaces';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'game-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
  animations: [
      trigger('element', [
            state('present', style({transform: 'translateY(0)', opacity: 1})),
            transition('void => *', [
              style({transform: 'translateY(-50px)', opacity: 0}),
              animate(200)
            ]),
            transition('* => void', [
              animate(100, style({transform: 'translateY(50px)', opacity: 0}))
            ])
        ])
  ]
})
export class GameLobbyComponent implements OnInit {

  @Input() players: ServerMember[] = [];

  constructor() { }

  ngOnInit() {
  }

}
