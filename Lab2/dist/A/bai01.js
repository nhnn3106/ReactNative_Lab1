"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloPromise = void 0;
exports.helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
exports.helloPromise.then((result) => {
    console.log(result);
});
