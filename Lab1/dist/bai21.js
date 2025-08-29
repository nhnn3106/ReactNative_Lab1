"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reposity = void 0;
class Reposity {
    constructor(array) {
        this.array = array;
    }
    add(value) {
        this.array.push(value);
    }
    getAll() {
        console.log(`Entire data of this array: ${this.array}`);
    }
}
exports.Reposity = Reposity;
