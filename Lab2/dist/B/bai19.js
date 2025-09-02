"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai18_1 = require("./bai18");
const fetchUsers = async (ids) => {
    try {
        const userPromise = ids.map((id) => (0, bai18_1.fetchUser)(id));
        const results = await Promise.all(userPromise).then((el) => el);
        return results;
    }
    catch (error) {
        console.error("Error fetching users");
    }
};
console.log("Start to fetch users:");
fetchUsers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).then((result) => result?.forEach((el) => el.displayInfo()));
