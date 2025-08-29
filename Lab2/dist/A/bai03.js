"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bai03 = void 0;
const bai03 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Somethine went wrong");
        }, 1000);
    });
};
exports.bai03 = bai03;
(0, exports.bai03)().catch((result) => {
    console.log(result);
});
