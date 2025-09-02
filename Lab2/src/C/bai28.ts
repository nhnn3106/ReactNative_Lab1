export const task = async (idx: number = 1, waitMs: number = 1000) => {
    return await new Promise((resolve) => {
        console.log("Starting run task " + idx + ".......")
        setTimeout(() => {
            resolve("Done task " + idx + ".")
        }, waitMs)
    })
}

const bai28 = async () => {
    return await Promise.all(
        Array
            .from({ length: 5 })
            .map((_, idx) => task(idx + 1, (idx + 1) * 1000))
    ).then((values) =>
        values.forEach(
            (el) => console.log(el)
        )
    )
}

bai28()
