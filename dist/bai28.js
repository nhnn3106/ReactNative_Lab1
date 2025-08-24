"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class Animal {
    makeSound(sound) {
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`The dog says: Bark!`);
    }
}
exports.Dog = Dog;
class Cat extends Animal {
    makeSound() {
        console.log(`The cat says: Meow!`);
    }
}
exports.Cat = Cat;
