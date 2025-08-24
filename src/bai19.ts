export class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    speak(): void { }
}
export class Dog extends Animal {
    speak(): void {
        console.log(`${this.name} barks.`)
    }
}

export class Cat extends Animal {
    speak(): void {
        console.log(`${this.name} meows.`)
    }
}