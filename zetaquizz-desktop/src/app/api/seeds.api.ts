import { NgZone } from '@angular/core';
import { Api, ZetaPushClient, createApi } from 'zetapush-angular';

import { Instance } from '../creation/customizer/customizer.component';

interface MacroCall {
    name?: string;
    errors?: any;
    result?: any;
}

export class SeedApi extends Api {

    export({seed}: {seed: Instance[]}): Promise<MacroCall> {
        return this.$publish('setSeed', {seed});
    }

    import({id}: {id: string}): Promise<MacroCall> {
        return this.$publish('getSeed', {id});
    }

}

export function SeedApiFactory(client: ZetaPushClient, zone: NgZone): SeedApi {
    return createApi(client, zone, SeedApi) as SeedApi;
}

export const SeedApiProvider = {
    provide: SeedApi,
    useFactory: SeedApiFactory,
    deps: [ ZetaPushClient, NgZone ]
}
