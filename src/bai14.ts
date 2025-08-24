class Employee {
    name: string;
    id: number;
    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
    displayInfo(): void {
        console.log(`Employee: ${this.name}, ID: ${this.id}`)
    }
}

export class Manager extends Employee {
    teamSize: number;
    constructor(name: string, id: number, teamSize: number) {
        super(name, id);
        this.teamSize = teamSize
    }
    conductMeeting(): void {
        console.log(`${this.name} is conduct a meeting.`)
    }
}

export class Developer extends Employee {
    programmingLanguage: string;
    constructor(name: string, id: number, programmingLanguage: string) {
        super(name, id);
        this.programmingLanguage = programmingLanguage
    }
    writeCode(): void {
        console.log(`${this.name} is writing code in ${this.programmingLanguage}`)
    }
}