"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTask = void 0;
const simulateTask = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve("Task done"); }, time);
    });
};
exports.simulateTask = simulateTask;
(0, exports.simulateTask)(1000).then((result) => console.log(result));
