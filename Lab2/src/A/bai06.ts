export const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1")
}, 1000, "one")  
})

export const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2")
    }, 1000, "two")  
})

export const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3")
}, 1000, "three")  
})


Promise.all([promise1, promise2, promise3]).then((results) => {
    results.forEach((result, index) => {
        console.log(`Promise ${index + 1}: ${result}`)
    })
})