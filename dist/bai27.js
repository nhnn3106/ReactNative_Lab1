"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const bai01_1 = require("./bai01");
class Teacher extends bai01_1.Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age}. Also I'm a ${this.subject} teacher.`);
    }
}
exports.Teacher = Teacher;
