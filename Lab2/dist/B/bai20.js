"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    displayInfo() {
        return (`User=[id: ${this.id}, name: ${this.name}, age: ${this.email}]`);
    }
}
exports.User = User;
const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Request for user time out after 2000ms"));
    }, 2000);
});
const fetchUser = async (id) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(new User(id, `User ${id}`, `user${id}@gmail.com`));
        }, 1000);
    });
};
const bai20 = async () => {
    try {
        const result = await Promise.race([timeoutPromise, fetchUser(20)]);
        return result;
    }
    catch (error) {
        throw Error();
    }
};
bai20().then((user) => console.log(user)).catch((error) => console.error("Test error: " + error.message));
