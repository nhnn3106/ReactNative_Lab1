"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.User = void 0;
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
const fetchUser = async (id) => {
    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve(new User(id, `User ${1}`, `user${1}@gmail.com`));
        }, 1000);
    });
};
exports.fetchUser = fetchUser;
(0, exports.fetchUser)(1).then((result) => console.log(`Successfully fetch user: ${result.displayInfo()}`));
