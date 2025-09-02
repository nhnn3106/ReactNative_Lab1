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
const bai17 = async (number) => {
    try {
        const results = [];
        for await (const result of [(0, exports.multiplyByTwo)(number), (0, exports.addTwo)(number), (0, exports.squareNumber)(number)]) {
            console.log("Result: " + result);
            results.push(result);
        }
        return results;
    }
    catch (error) {
        console.error("Error");
    }
};
bai17(10).then((results) => console.log("Final results: " + results));
