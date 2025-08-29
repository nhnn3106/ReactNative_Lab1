import { Person } from "./bai01";

export class Teacher extends Person {
    subject: string;
    constructor(name: string, age: number, subject: string) {
        super(name, age)
        this.subject = subject
    }
    introduce(): void {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age}. Also I'm a ${this.subject} teacher.`)
    }
}