import { Component, OnInit, Input } from '@angular/core';

import { ServerMember } from '../../services/room.interfaces';

@Component({
  selector: 'game-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class GameLeaderboardComponent implements OnInit {

    @Input() players: ServerMember[] = [];

  constructor() { }

  ngOnInit() {
  }

}
