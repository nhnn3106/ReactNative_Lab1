"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() { }
}
exports.Animal = Animal;
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}
exports.Cat = Cat;
