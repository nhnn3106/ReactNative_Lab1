"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareNumber = exports.addTwo = exports.multiplyByTwo = void 0;
const multiplyByTwo = async (number) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(number * 2);
        }, 4000);
    });
};
exports.multiplyByTwo = multiplyByTwo;
const addTwo = async (number) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(number + 2);
        }, 3000);
    });
};
exports.addTwo = addTwo;
const squareNumber = async (number) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(number ** 2);
        }, 2000);
    });
};
exports.squareNumber = squareNumber;
const bai15 = async (number) => {
    try {
        console.log(`Number: ${number}`);
        const result1 = await (0, exports.multiplyByTwo)(number);
        console.log(`After mutilply: ${result1}`);
        const result2 = await (0, exports.addTwo)(result1);
        console.log(`After add two: ${result2}`);
        const final = await (0, exports.squareNumber)(result2);
        console.log(`After squared: ${final}`);
        return final;
    }
    catch (error) {
        throw new Error("Error occurred");
    }
};
bai15(10).then(result => console.log(result));
