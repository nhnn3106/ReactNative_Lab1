"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.arr = [];
    }
    isEmpty() {
        return this.arr.length === 0;
    }
    push(value) {
        this.arr.push(value);
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return undefined;
        }
        return this.arr.pop();
    }
    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty. Nothing to peek.");
            return undefined;
        }
        return this.arr[this.arr.length - 1];
    }
    print() {
        console.log(`Stack has ${this.arr}.`);
    }
}
exports.Stack = Stack;
