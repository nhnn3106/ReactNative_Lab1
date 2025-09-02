const queueProcess = async (arrPromise: Promise<any>[]) => {
    const results = []
    for (const task of arrPromise) {
        try {
            const result = await task.then(res => console.log(res))
            results.push(result)
        } catch (error) {
            console.error("Task failed: ", error)
            results.push(null)
        }
    }
    return results
}

export const task = async (idx: number = 1, waitMs: number = 1000) => {
    return await new Promise((resolve) => {
        console.log("Starting run task " + idx + ".......")
        setTimeout(() => {
            resolve("Done task " + idx + ".")
        }, waitMs)
    })
}

queueProcess(Array.from({ length: 8 }).map((_, idx) => task(idx, idx * 1000)))
    .then((results) => results)
