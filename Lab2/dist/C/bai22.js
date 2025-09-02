"use strict";
const bai22 = async () => {
    return await Promise.all(Array.from({ length: 5 }).map(async (_, idx) => {
        return await fetch(`https://jsonplaceholder.typicode.com/todos/${idx + 1}`)
            .then(result => result.json())
            .catch((err) => { throw new Error("Response status: " + err.message); });
    }));
};
bai22()
    .then(result => console.log(result));
