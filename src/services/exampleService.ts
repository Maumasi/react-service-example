import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { BehaviorSubject } from 'rxjs';

import { Singleton } from './_singletonAbstract';

class ExampleServiceClass extends Singleton {

    public someValue: BehaviorSubject<string|null> = new BehaviorSubject<string|null>(null);

    public constructor() {
        super();

        // some other setup...
        const api = axios.create({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });
    }

    public async getTodosById(id: number) {
        this.someValue.next('loading');
        return await axios.get(`/todos/${id}`);
    }

    public updateSomeValue(value: string) {
        this.someValue.next(value);
    }
}

// Singleton instance: new-up the service so it can be initiated and used immediately
export const ExampleService = new ExampleServiceClass();

