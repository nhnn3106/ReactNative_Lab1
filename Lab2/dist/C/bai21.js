"use strict";
const bai21 = async () => {
    return await fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(result => result.json())
        .catch((err) => { throw new Error("Response status: " + err.message); });
};
bai21().then(result => console.log(result));
