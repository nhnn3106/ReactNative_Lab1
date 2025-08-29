"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai04_1 = require("./bai04");
bai04_1.bai04
    .then((result) => console.log("Success: " + result))
    .catch((error) => console.error("Failed: " + error))
    .finally(() => console.log("Done"));
