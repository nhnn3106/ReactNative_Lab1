"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        this.name = "";
        // constructor(name: string) {
        //     this.name = name
        // }
    }
    // Getters
    getName() {
        return this.name;
    }
    // Setters
    setName(name) {
        this.name = name;
    }
}
exports.User = User;
