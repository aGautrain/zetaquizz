import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SeedApi } from '../../api/seeds.api';

import 'rxjs/add/operator/map';

export interface Instance {
    question: string;
    answers: string[];
    solution: any;
}

@Component({
  selector: 'questions-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.css'],
  // for animations comprehension : https://angular.io/guide/animations
  animations: [
    trigger('fading', [
      state('in', style({opacity: 1})),
      transition('void => *', [
        style({opacity: 0}),
        animate(100)
      ])
    ]),
    trigger('rightItem', [
      state('in', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({transform: 'translateX(100px)', opacity: 0}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100px)', opacity: 0}))
      ])
  ]),
  trigger('leftItem', [
    state('in', style({transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
      style({transform: 'translateX(-100px)', opacity: 0}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(-100px)', opacity: 0}))
    ])
  ])
  ]
})
export class CustomizerComponent {

    isEditingInstance: boolean = false;
    instanceEdited: number = 0;
    instanceTemporary: Instance;

    instances: Instance[] = [];

    quizzSeed: string = "";
    lastWorkingSeed: string = "";



    constructor(private seedApi: SeedApi) { }

    goToEditor(numero: number): void {

        this.instanceEdited = numero;
        this.isEditingInstance = true;

        // the instance edited is a temporary object
        // this will allow to cancel changes

        if(numero < this.instances.length){
            // editing a shallow copy of existing instance
            this.instanceTemporary = JSON.parse(JSON.stringify(this.instances[numero]));
        } else {
            // editing new instance
            this.instanceTemporary = {
                "question": "",
                "answers": ["","","",""],
                "solution": 0
            };
        }

    }

    closeEditor(): void {
        this.isEditingInstance = false;
    }

    isValidInstance(): boolean {
        let index: number = this.instanceTemporary['solution'];

        let indexIsValid: boolean = index >= 0 && index < 4;

        let answerIsValid: boolean = this.instanceTemporary['answers'][index] != "";

        let questionIsValid: boolean = this.instanceTemporary['question'] != "";

        return indexIsValid && answerIsValid && questionIsValid;
    }

    isValidQuizz(): boolean {
        return this.instances.length >= 1;
    }

    validateEditor(): void {
        if(this.isValidInstance()){
            this.isEditingInstance = false;

            // we apply changes
            this.instances[this.instanceEdited] = this.instanceTemporary;

        }
    }

    deleteInstance(numero: number): void {
        this.instances.splice(numero, 1);
    }

    instancesKeys(): number[] {
        let numbers: number[] = [];
        for(let i: number = 0; i < this.instances.length; i++){
            numbers.push(i);
        }
        return numbers;
    }

    answersKeys(): number[] {
        return [0,1,2,3];
    }

    getAnswerName(k: number): string {
        return "answer" + k;
    }


    // seed process

    isValidSeed(): boolean {
        return this.quizzSeed !== "";
    }

    getSeed(): string {
        return this.quizzSeed;
    }

    canExportQuizz(): boolean {
        return this.instances.length > 0;
    }

    canImportQuizz(): boolean {
        return this.quizzSeed !== "" && this.quizzSeed !== this.lastWorkingSeed;
    }

    exportQuizz(): void {
        if(this.isValidQuizz()){
            this.seedApi.export({seed: this.instances}).then(
                res => {
                    this.quizzSeed = res['id'];
                    this.lastWorkingSeed = res['id'];
                },
                err => {
                    console.error('Error happend during export');
                }
            );
        }
    }

    importQuizz(): void {
        if(this.isValidSeed()){
            this.seedApi.import({id: this.quizzSeed}).then(
                res => {
                    this.lastWorkingSeed = this.quizzSeed;
                    let instances: Instance[] = res['instances'];
                    this.formatInstances(instances);
                    this.instances = instances;
                    console.log('Seed imported : ', instances);
                },
                err => { console.error('Error happend during export'); }
            );
        }
    }

    formatInstances(instances: Instance[]): void {
        instances.map(x => x['solution'] = x['answers'].indexOf(x['solution']));
        for(let i: number = 0; i < instances.length; i++){
            while(instances[i]['answers'].length < 4){
                instances[i]['answers'].push("");
            }
        }
    }

}
