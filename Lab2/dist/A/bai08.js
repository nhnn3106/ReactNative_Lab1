"use strict";
Promise
    .resolve(2)
    .then((result) => {
    const result1 = result ** 2;
    console.log(`Squared ${result} = ${result1}`);
    return result1;
})
    .then((result1) => {
    const result2 = result1 * 2;
    console.log(`Doubled ${result1} = ${result2}`);
    return result2;
})
    .then((result2) => {
    const result3 = result2 + 5;
    console.log(`Add ${result2} = ${result3}`);
    return result3;
})
    .then((result3) => {
    console.log("Final result: " + result3);
});
