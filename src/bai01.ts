export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  dislayInfo(): void {
    console.log(`Person: [name: ${this.name}, age: ${this.age}]`)
  }
}