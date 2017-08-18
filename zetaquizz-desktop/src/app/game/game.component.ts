import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { ServerMember, ServerRoom } from '../services/room.interfaces';
import { ServerQuestion, ServerCommunication, ServerScore, QuizzStep, ResponseState } from '../services/quizz.interfaces';

import { QuizzService } from '../services/quizz.service';
import { RoomService } from '../services/rooms.service';

import { GameLobbyComponent } from './lobby/lobby.component';
import { GameLeaderboardComponent } from './leaderboard/leaderboard.component';

import { ZetaPushConnection, ZetaPushClient } from 'zetapush-angular';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
    animations: [
        trigger('swipeTop', [
              state('present', style({transform: 'translateY(0)', opacity: 1})),
              transition('* => void', [
                animate(200, style({transform: 'translateY(-1000px)', opacity: 0}))
              ])
          ])
    ]
})
export class GameComponent implements OnInit, OnDestroy {

    // List of players in our room
    participants: Array<ServerMember> = [];
    membersSubscription: any = false;
    questionSubscription: any = false;
    notifSubscription: any = false;
    scoreSubscription: any = false;

    // Informations about the room itself
    gameData: ServerRoom;

    gameSteps: Array<QuizzStep> = [];

    // Time before something happens (game or question)
    timeLeft: number = 60;

    // Boolean changing the displayed view
    gameStarted: boolean = false;
    gameEnded: boolean = false;

    // Loading hidden when a question is received
    // And shown when a question ended
    waitingQuestion: any;

    // Boolean allowing to send answers
    canAnswer: boolean = false;
    responseReceived: boolean = false;

    // Timer stored to be cleared
    timer: any = false;

    instance: ServerQuestion;
    instanceNumero: number = 0;

    constructor(private route: ActivatedRoute,
                private roomService: RoomService,
                private quizzService: QuizzService,
                private router: Router,
                private zpConnection: ZetaPushConnection,
                private zpClient: ZetaPushClient) {

        }

        ngOnInit() {

            if(!this.zpClient.isConnected()){
                this.redirectLogin();
            } else {

                // 1°) load the nav parameters
                this.gameData = JSON.parse(this.route.snapshot.params['game']);

                // 2°) join the room
                this.roomService.join(this.gameData.id).then(
                    () => {
                        // 3°) subscribe to the members given by the room service
                        this.membersSubscription = this.roomService.roomMembers.subscribe(
                            result => {
                                this.participants = result;
                            }
                        );
                    },
                    err => { console.log('error joining the game, game.component.ts:80'); }
                );


                // 4°) calculation of the time left before starting
                const now: number = Date.now();
                const willCloseAt: number = this.gameData.metadata.createdAt + this.gameData.metadata.openDelay;

                // We parse it in milliseconds
                this.timeLeft = Math.floor((willCloseAt - now)/1000);

                // 5°) other game variables initialization
                this.gameStarted = false;
                this.gameEnded = false;

                // 6°) steps of the quizz

                for(let i: number = 1; i <= this.gameData.metadata.progressMaxQ; i++) {

                    let step: QuizzStep = {
                        stepNumber: i,
                        state: ResponseState.NotResponded
                    };

                    this.gameSteps.push(step);
                }

                // Interval decreasing the counter before game starts
                this.timer = setInterval(() => {
                    if(!this.decreaseTime()){
                        // Game has started
                        clearInterval(this.timer);
                        this.startGame();
                    }
                }, 1000);

            }

        }

        // Function decreasing time before game starts
        decreaseTime() {
            if(this.timeLeft > 1) {
                this.timeLeft--;
                return true;
            } else if(this.timeLeft === 1) {
                this.timeLeft--;
                return false;
            }
        }

        // Starting the game and initializing things
        startGame() {

            this.gameStarted = true;
            this.responseReceived = true;

            this.timer = false;

            this.quizzService.open();

            // Subscribing to the different observables available
            console.log('game starts !');

            this.questionSubscription = this.quizzService.questions.subscribe(
                question => {
                    this.receiveQuestion(question);
                },
                error => {
                    console.error(error);
                },
                () => {
                    this.endQuizz();
                }
            );

            this.notifSubscription = this.quizzService.notifs.subscribe(
                notif => {
                    this.responseReceived = true;
                    if(notif.content.correct){
                        this.gameSteps[this.instanceNumero-1].state = ResponseState.Correct;
                    } else {
                        this.gameSteps[this.instanceNumero-1].state = ResponseState.Incorrect;
                    }
                }
            );

            this.scoreSubscription = this.quizzService.scores.subscribe(
                scores => {
                    this.receiveScores(scores);
                }
            );
        }

        // Logic applied when we received a question
        receiveQuestion(communication: ServerCommunication) {

            console.log('QUESTION: ', communication);
            this.instance = communication['content'];

            this.instanceNumero++;
            this.timeLeft = this.instance.time;
            this.canAnswer = true;
            this.responseReceived = false;

            if(this.timer) {
                clearInterval(this.timer);
            }

            this.timer = setInterval(() => {
                // If it was the last decrease tick
                if(!this.decreaseQuestionTime()){

                    this.canAnswer = false;
                    this.responseReceived = true;
                    clearInterval(this.timer);
                    this.timer = false;

                    console.log('waiting next questions');

                }
            }, 1000);
        }

        // Function decreasing time before question ends
        decreaseQuestionTime() {
            if(this.timeLeft > 1) {
                this.timeLeft--;
                return true;
            } else if(this.timeLeft === 1) {
                this.timeLeft--;
                return false;
            }
        }

        // Once answer is selected => submitting it to server
        answerQuestion(answerChosen) {
            if(this.canAnswer){
                this.canAnswer = false;

                // Sending response to server
                this.quizzService.answer(this.gameData.id, answerChosen);

            }
        }

        endQuizz() {
            console.log('END OF THE QUIZZ');
            this.gameEnded = true;
        }

        receiveScores(scores: Array<ServerScore>): void {
            for(let i: number = 0; i < scores.length; i++){
                for(let j: number = 0; j < this.participants.length; j++){
                    if(scores[i].userKey === this.participants[j].userKey){
                        this.participants[j].score = scores[i].score;
                    }
                }
            }
        }


        // Functions allowing us to know where we are
        isInScores(): boolean {
            return this.gameEnded;
        }

        isInLobby(): boolean {
            return this.instanceNumero === 0;
        }

        isActive(step: QuizzStep): boolean {
            return step.stepNumber === this.instanceNumero && !this.gameEnded && this.gameStarted;
        }


        isCorrect(step: QuizzStep): boolean {
            return step.state === ResponseState.Correct;
        }

        isIncorrect(step: QuizzStep): boolean {
            return step.state === ResponseState.Incorrect;
        }

        isNotLastQuestion(): boolean {
            return this.gameData.metadata.progressMaxQ !== this.instanceNumero;
        }

        timeRemaining(): string {
            switch(this.timeLeft){
                case 0:
                    return 'quizz-progress--0';
                case 1:
                    return 'quizz-progress--100';
                case 2:
                    return 'quizz-progress--90';
                case 3:
                    return 'quizz-progress--80';
                case 4:
                    return 'quizz-progress--70';
                case 5:
                    return 'quizz-progress--60';
                case 6:
                    return 'quizz-progress--50';
                case 7:
                    return 'quizz-progress--40';
                case 8:
                    return 'quizz-progress--30';
                case 9:
                    return 'quizz-progress--20';
                case 10:
                    return 'quizz-progress--10';
                default:
                    return 'quizz-progress--0';
            }
        }

        getAnswerResult(): string {
            let res: string = "Le quizz va bientôt commencer";

            if(this.gameSteps.length > 0 && this.instanceNumero > 0){
                let step: QuizzStep = this.gameSteps[this.instanceNumero-1];

                if(step.state === ResponseState.Correct){
                    res = "Bonne réponse !";
                } else if (step.state === ResponseState.Incorrect){
                    res = "Mauvaise réponse.";
                } else {
                    res = "Vous n'avez pas répondu à temps";
                }
            }

            return res;
        }

        getAnswerIcon(): string {
            let res: string = "hourglass-half";

            if(this.gameSteps.length > 0 && this.instanceNumero > 0){
                let step: QuizzStep = this.gameSteps[this.instanceNumero-1];

                if(step.state === ResponseState.Correct){
                    res = "check";
                } else if (step.state === ResponseState.Incorrect){
                    res = "times";
                } else {
                    res = "question";
                }
            }

            return res;
        }


        backLobby() {

            if(!this.gameEnded){
                this.roomService.leave(this.gameData.id);
            }

            this.roomService.joinLobby();
            this.router.navigate(['/lobby']);

        }

        redirectLogin() {
            this.router.navigate(['/login']);
        }

        ngOnDestroy() {

            if(this.notifSubscription){
                this.notifSubscription.unsubscribe();
            }

            if(this.scoreSubscription){
                this.scoreSubscription.unsubscribe();
            }

            if(this.questionSubscription){
                this.questionSubscription.unsubscribe();
            }

            if(this.membersSubscription){
                this.membersSubscription.unsubscribe();
            }

            if(this.timer){
                clearInterval(this.timer);
            }

            this.quizzService.close();
        }

    }
