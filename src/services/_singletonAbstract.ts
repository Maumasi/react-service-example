export abstract class Singleton {
    static instance: Singleton | null = null;

    constructor() {
        const actualConstructor = new.target; // captures the constructor of the subclass
        if (actualConstructor.instance) {
            return actualConstructor.instance;
        }
        actualConstructor.instance = this;
        if (this.constructor === Singleton) {
            throw new Error('Abstract class "Singleton" cannot be instantiated directly.');
        }
    }
}

