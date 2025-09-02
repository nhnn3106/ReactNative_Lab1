"use strict";
const bai23 = async () => {
    const arr = await fetch("https://jsonplaceholder.typicode.com/todos")
        .then(result => result.json())
        .catch(err => console.log(err.message));
    return arr.filter((el) => !el?.completed);
};
bai23().then(result => console.log(result));
