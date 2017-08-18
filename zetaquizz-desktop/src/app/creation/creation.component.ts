import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { RoomService } from '../services/rooms.service';
import { CustomizerComponent } from './customizer/customizer.component';

import { ZetaPushClient } from 'zetapush-angular';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent implements OnInit, OnDestroy {

    @ViewChild(CustomizerComponent) seed: CustomizerComponent;



    stepNumber: number = 0;
    quizzType: string = "";

    quizzSeed: string = "";




    roomName: string = "";
    roomTime: number = 0;
    roomQuestions: number = 0;
    roomPassword: string = "";
    roomChronomode: string = "default";

    goingToLobby: boolean = false;

  constructor(private router: Router,
                private roomService: RoomService,
                private zpClient: ZetaPushClient) { }

  ngOnInit() {

      if(!this.zpClient.isConnected()){
          this.redirectLogin();
      } else {
          this.roomTime = 30;
          this.roomQuestions = 5;
      }

  }

    backLobby(): void {
        this.goingToLobby = true;
        this.router.navigate(['/lobby']);
    }

    formComplete(): boolean {

        let complete: boolean = false;

        complete = (this.roomName != ""
                    && this.roomTime > 0
                    && this.roomTime < 100
                    && this.quizzSeed !== "");

        return complete;
    }

    createCustomRoom() {
        if(this.formComplete()){

            let isInChronomode: boolean = (this.roomChronomode === "chronomode");

              this.roomService.createCustom(
                  this.roomName,
                  this.roomPassword,
                  Math.floor(this.roomTime),
                  isInChronomode,
                  this.quizzSeed
              ).then(
                      result => {
                          // redirection (to game) + add parameters
                          this.router.navigate(['/game', JSON.stringify(result['room'])]);
                      },
                      error => {
                          console.log('error happend');
                      }
              );
          }
    }

    // redirection to the corresponding method
    create() {

        this.createCustomRoom();

    }

    /* Step gestion */

    nextStep(): void {
        if(this.stepNumber === 1){
            // saving seed
            this.quizzSeed = this.seed.getSeed();
        }
        this.stepNumber++;
    }

    previousStep(): void {
        this.stepNumber--;
    }

    stepIsFirst(): boolean {
        return this.stepNumber === 0;
    }

    stepIsSecond(): boolean {
        return this.stepNumber === 1;
    }

    stepIsThird(): boolean {
        return this.stepNumber === 2;
    }

    /* End step gestion */


    /* Step 1 */

    selectCustomType(): void {
        this.quizzType = "custom";
    }

    typeIsCustom(): boolean {
        return this.quizzType === "custom";
    }

    typeIsUnknown(): boolean {
        return !this.typeIsCustom();
    }


    /* Step 2 */

    seedIsUnknown(): boolean {
        if(this.seed != null){
            return this.seed.getSeed() === "";
        } else {
            return true;
        }
    }


    redirectLogin() {
        console.log('tried to access a page without being logged in');
        this.router.navigate(['/login']);
    }

    ngOnDestroy() {
        // when forced exit OR going to game -> leaving lobby
        if(this.zpClient.isConnected() && !this.goingToLobby) {
            this.roomService.leaveLobby();
        }
    }

}
