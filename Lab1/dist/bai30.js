"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor(studentList, teacherList) {
        this.studentList = studentList;
        this.teacherList = teacherList;
    }
    display() {
        console.log("List of students: ");
        this.studentList.map((el) => el.displayAllInfo());
        console.log("List of teachers: ");
        this.teacherList.map((el) => el.dislayInfo());
    }
}
exports.School = School;
