interface Movable {
    move(): void
}

export class Car implements Movable {
    move(): void {
        console.log("Brmmm Brrmmm!")
    }
}


export class Robot implements Movable {
    move(): void {
        console.log("Tfff Bpp Tff Bpp! I'm a robot. I'm walking.")
    }
}