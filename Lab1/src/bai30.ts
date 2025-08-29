import { Student } from "./bai02";
import { Teacher } from "./bai27";

export class School {
    studentList: Student[];
    teacherList: Teacher[];
    constructor(studentList: Student[], teacherList: Teacher[]) {
        this.studentList = studentList
        this.teacherList = teacherList
    }
    display(): void {
        console.log("List of students: ")
        this.studentList.map((el) => el.displayAllInfo())
        console.log("List of teachers: ")
        this.teacherList.map((el) => el.dislayInfo())
    }
}