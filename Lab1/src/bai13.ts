abstract class Shape {

    abstract area(): number;
    describe(): void {
        console.log(`The area of this shape is ${this.area()}`)
    }
}

export class Square extends Shape {
    width: number;
    constructor(width: number) {
        super();
        this.width = width
    }
    area(): number { return this.width ** 2 }
}
export class Circle extends Shape {
    diameter: number;
    constructor(diameter: number) {
        super();
        this.diameter = diameter
    }
    area(): number { return this.diameter * Math.PI }
}