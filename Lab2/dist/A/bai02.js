"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai02 = void 0;
const bai02 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
};
exports.bai02 = bai02;
(0, exports.bai02)().then((result) => {
    console.log(result);
});
