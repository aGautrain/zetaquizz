import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// primeng dependencies
import { GrowlModule } from 'primeng/primeng';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LobbyComponent } from './lobby/lobby.component';
import { CreationComponent } from './creation/creation.component';
import { CustomizerComponent } from './creation/customizer/customizer.component';
import { GameComponent } from './game/game.component';
import { GameLobbyComponent } from './game/lobby/lobby.component';
import { GameLeaderboardComponent } from './game/leaderboard/leaderboard.component';

// services
import { ZetaPushClientConfig, ZetaPushModule } from 'zetapush-angular';
import { SeedApiProvider } from './api/seeds.api';
import { RoomApiProvider } from './api/rooms.api';
import { AccountApiProvider } from './api/accounts.api';
import { isOpenPipe, isClosedPipe } from './services/pipes';
import { RoomService } from './services/rooms.service';
import { QuizzService } from './services/quizz.service';
import { RoomComponent } from './room/room.component';


const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'lobby', component: LobbyComponent
    },
    {
        path: 'creation', component: CreationComponent
    },
    {
        path: 'game/:game', component: GameComponent
    },
    {
        path: 'game', component: LobbyComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LobbyComponent,
    CreationComponent,
    GameComponent,
    GameLobbyComponent,
    GameLeaderboardComponent,
    RoomComponent,
    isOpenPipe,
    isClosedPipe,
    CustomizerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ZetaPushModule,
    GrowlModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      {
          provide: ZetaPushClientConfig,
          useValue: {
              sandboxId: 'q1Yds09l'
          }
      },
      AccountApiProvider,
      RoomApiProvider,
      SeedApiProvider,
      RoomService,
      QuizzService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
