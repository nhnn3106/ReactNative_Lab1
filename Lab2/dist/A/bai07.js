"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai06_1 = require("./bai06");
Promise.race([bai06_1.promise1, bai06_1.promise2, bai06_1.promise3]).then((results) => {
    console.log("Came first: " + results);
}).catch((error) => console.error(error));
