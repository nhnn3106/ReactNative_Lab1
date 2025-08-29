"use strict";
const arr = [34, 35, 5436, 547, 4575, 2342, 424234, 2352];
const bai09 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Array: " + arr);
        resolve(arr);
    }, 1000);
});
bai09.then((result) => {
    console.log("Filtered arr: " + result.filter((el) => el % 2 == 0));
});
