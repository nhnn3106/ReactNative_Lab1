"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Developer = exports.Manager = void 0;
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    displayInfo() {
        console.log(`Employee: ${this.name}, ID: ${this.id}`);
    }
}
class Manager extends Employee {
    constructor(name, id, teamSize) {
        super(name, id);
        this.teamSize = teamSize;
    }
    conductMeeting() {
        console.log(`${this.name} is conduct a meeting.`);
    }
}
exports.Manager = Manager;
class Developer extends Employee {
    constructor(name, id, programmingLanguage) {
        super(name, id);
        this.programmingLanguage = programmingLanguage;
    }
    writeCode() {
        console.log(`${this.name} is writing code in ${this.programmingLanguage}`);
    }
}
exports.Developer = Developer;
