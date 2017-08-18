export interface ServerCommunication {
    type: string;
    content: ServerQuestion | ServerResponse | any;
    message: string;
}

export interface ServerQuestion {
    question: string;
    category: string;
    answers: Array<string>;
    time: number;
}

interface ServerResponse {
    message: string;
    correct: boolean;
    points: number;
}

export interface ServerScore {
    userKey: string;
    score: number;
}

export enum ResponseState {
    NotResponded,
    Correct,
    Incorrect
}

export interface QuizzStep {
    stepNumber: number;
    state: ResponseState
}
