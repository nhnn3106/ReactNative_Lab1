"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai05_1 = require("../A/bai05");
const bai13 = async () => {
    try {
        const result = await (0, bai05_1.simulateTask)(2000);
        return result;
    }
    catch (error) {
        console.error("Error occured: ", error.message);
        throw error;
    }
};
bai13();
