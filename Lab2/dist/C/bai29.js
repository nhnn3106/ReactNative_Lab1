"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
const queueProcess = async (arrPromise) => {
    const results = [];
    for (const task of arrPromise) {
        try {
            const result = await task.then(res => console.log(res));
            results.push(result);
        }
        catch (error) {
            console.error("Task failed: ", error);
            results.push(null);
        }
    }
    return results;
};
const task = async (idx = 1, waitMs = 1000) => {
    return await new Promise((resolve) => {
        console.log("Starting run task " + idx + ".......");
        setTimeout(() => {
            resolve("Done task " + idx + ".");
        }, waitMs);
    });
};
exports.task = task;
queueProcess(Array.from({ length: 8 }).map((_, idx) => (0, exports.task)(idx, idx * 1000)))
    .then((results) => results);
