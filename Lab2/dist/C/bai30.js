"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
const task = async (idx = 1, waitMs = 1000) => {
    return await new Promise((resolve) => {
        console.log("Starting run task " + idx + ".......");
        setTimeout(() => {
            resolve("Done task " + idx + ".");
        }, waitMs);
    });
};
exports.task = task;
Promise.allSettled(Array.from({ length: 5 }).map((_, idx) => (0, exports.task)(idx, idx * 1000)))
    .then((results) => results.forEach((result, idx) => console.log("Task " + idx + "'s status: " + result.status)));
