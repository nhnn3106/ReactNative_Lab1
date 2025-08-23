class Animal {
    name: string;
    sound(sound: string): void {
        console.log(`This ${this.name} says: ${sound}`);
    }
    constructor(name: string) {
        this.name = name
    }
}
export class Dog extends Animal {
    constructor() {
        super("dog")

    }
    bark(): void {
        this.sound("bark");
    }
}
export class Cat extends Animal {
    constructor() {
        super("cat")

    }
    meow(): void {
        this.sound("meow");
    }
}