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
const bai28 = async () => {
    return await Promise.all(Array
        .from({ length: 5 })
        .map((_, idx) => (0, exports.task)(idx + 1, (idx + 1) * 1000))).then((values) => values.forEach((el) => console.log(el)));
};
bai28();
