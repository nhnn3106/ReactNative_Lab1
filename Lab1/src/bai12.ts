interface Flyable {
    fly(): void;
}
interface Swimmable {
    swim(): void;
}


export class Bird implements Flyable {
    fly(): void {
        console.log("This animal can fly.");
    }
}
export class Fish implements Swimmable {
    swim(): void {
        console.log("This animal can swim.");
    }
}