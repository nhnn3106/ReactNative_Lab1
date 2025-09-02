export const task = async (idx: number = 1, waitMs: number = 1000) => {
    return await new Promise((resolve) => {
        console.log("Starting run task " + idx + ".......")
        setTimeout(() => {
            resolve("Done task " + idx + ".")
        }, waitMs)
    })
}

Promise.allSettled(Array.from({ length: 5 }).map((_, idx) => task(idx, idx * 1000)))
    .then((results) =>
        results.forEach((result, idx) => console.log("Task " + idx + "'s status: " + result.status)),
    );