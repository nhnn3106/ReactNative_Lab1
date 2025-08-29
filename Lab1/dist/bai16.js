"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
class Box {
    // Getters
    getT() {
        return this.value;
    }
    // Setters
    setT(t) {
        this.value = t;
    }
    constructor(value) {
        this.value = value;
    }
}
exports.Box = Box;
