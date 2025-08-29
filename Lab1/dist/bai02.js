"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const bai01_1 = require("./bai01");
class Student extends bai01_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAllInfo() {
        console.log(`Student: [name: ${this.name}, age: ${this.age}, grade: ${this.grade}]`);
    }
}
exports.Student = Student;
