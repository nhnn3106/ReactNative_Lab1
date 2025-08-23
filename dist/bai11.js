"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Animal {
    sound(sound) {
        console.log(`This ${this.name} says: ${sound}`);
    }
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor() {
        super("dog");
    }
    bark() {
        this.sound("bark");
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    constructor() {
        super("cat");
    }
    meow() {
        this.sound("meow");
    }
}
exports.Cat = Cat;
