"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promise3 = exports.promise2 = exports.promise1 = void 0;
exports.promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1");
    }, 1000, "one");
});
exports.promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 1000, "two");
});
exports.promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3");
    }, 1000, "three");
});
Promise.all([exports.promise1, exports.promise2, exports.promise3]).then((results) => {
    results.forEach((result, index) => {
        console.log(`Promise ${index + 1}: ${result}`);
    });
});
