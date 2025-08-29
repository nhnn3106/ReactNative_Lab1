import { promise1, promise2, promise3 } from "./bai06"


Promise.race([promise1, promise2, promise3]).then((results) => {
    console.log("Came first: " + results)
}).catch((error) => console.error(error))