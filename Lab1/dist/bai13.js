"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = void 0;
class Shape {
    describe() {
        console.log(`The area of this shape is ${this.area()}`);
    }
}
class Square extends Shape {
    constructor(width) {
        super();
        this.width = width;
    }
    area() { return Math.pow(this.width, 2); }
}
exports.Square = Square;
class Circle extends Shape {
    constructor(diameter) {
        super();
        this.diameter = diameter;
    }
    area() { return this.diameter * Math.PI; }
}
exports.Circle = Circle;
