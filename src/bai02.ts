import { Person } from "./bai01";

export class Student extends Person {
  grade: number;

  constructor(name: string, age: number, grade: number) {
    super(name, age);
    this.grade = grade
  }
  displayAllInfo(): void {
    console.log(`Student: [name: ${this.name}, age: ${this.age}, grade: ${this.grade}]`)
  }
}
