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
const number = 10;
const bai16 = async (number) => {
    const results = await Promise.all([(0, exports.multiplyByTwo)(number), (0, exports.addTwo)(number), (0, exports.squareNumber)(number)]);
    console.log(`Multiply by two: ${results[0]}`);
    console.log(`Add two: ${results[1]}`);
    console.log(`Squared: ${results[2]}`);
    return results;
};
bai16(10).then((results) => console.log('Final results: ' + results));
