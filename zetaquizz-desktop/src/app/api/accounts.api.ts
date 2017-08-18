import { NgZone } from '@angular/core';
import { Api, ZetaPushClient, createApi } from 'zetapush-angular';

interface MacroCall {
    name?: string;
    errors?: any;
    result?: any;
}

export class AccountApi extends Api {

    signup({login, password}: {login: string, password: string}): Promise<MacroCall> {
        return this.$publish('signup', {login, password});
    }

}

export function AccountApiFactory(client: ZetaPushClient, zone: NgZone): AccountApi {
    return createApi(client, zone, AccountApi) as AccountApi;
}

export const AccountApiProvider = {
    provide: AccountApi,
    useFactory: AccountApiFactory,
    deps: [ ZetaPushClient, NgZone ]
}
