"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai04 = void 0;
exports.bai04 = new Promise((resolve, reject) => {
    let i = Math.floor(Math.random() * 10);
    if (i !== 5) {
        resolve(i);
    }
    reject("Cannot print the random number not equal to 5");
});
exports.bai04
    .then((result) => console.log(result)).catch((error) => console.error(error));
