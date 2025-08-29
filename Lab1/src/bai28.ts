class Animal {

    protected makeSound(sound: string): void {

    }
}

export class Dog extends Animal {

    makeSound(): void {
        console.log(`The dog says: Bark!`)
    }
}
export class Cat extends Animal {
    makeSound(): void {
        console.log(`The cat says: Meow!`)
    }
}