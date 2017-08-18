import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ZetaPushConnection } from 'zetapush-angular';
import { Message } from 'primeng/primeng';

import { RoomService } from '../services/rooms.service';
import { AccountApi } from '../api/accounts.api';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {


    isInLogin: boolean = true;

    login: string = "";
    password: string = "";
    submited: boolean = false;
    msgs: Message[] = [];

    error: string = "";

    constructor(private zpConnection: ZetaPushConnection,
        private roomService: RoomService,
        private accountApi: AccountApi,
        private router: Router) { }

        signin() {

            if(this.formFull()){

                this.submited = true;

                this.zpConnection.connect({login: this.login, password: this.password}).then(
                    () => {
                        this.connectionSuccess();
                    },
                    err => {
                        this.error = "Wrong username/password";
                        this.connectionFailed();
                    }
                );

            }
        }

        signup() {

            if(this.formFull()){

                this.submited = true;

                this.zpConnection.connect({}).then(
                    () => {
                        this.accountApi.signup({login: this.login, password: this.password}).then(
                            res => {
                                alert('Signup successful !');
                                this.submited = false;
                                this.switchScreen();
                                this.zpConnection.disconnect();
                            },
                            err => {
                                this.submited = false;
                                this.error = err[0]['message'];
                                this.zpConnection.disconnect();
                            }
                        );
                    },
                    err => {
                        this.connectionFailed();
                    }
                );
            }

        }



        resetForm(): void {
            this.submited = false;
            this.login = "";
            this.password = "";
        }

        formFull(): boolean {
            return this.login != "" && this.password != "";
        }

        connectionFailed(): void {
            this.resetForm();
        }

        canSubmit(): boolean {
            return this.formFull() && !this.submited;
        }

        connectionSuccess(): void {

            this.resetForm();

            this.roomService.joinLobby();

            this.router.navigate(['/lobby']);
        }

        switchScreen(): void {
            this.isInLogin = !this.isInLogin;
            this.error = "";
        }




    }
