export const multiplyByTwo = async (number: number) => {
    return await new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(number * 2)
        }, 4000)
    })
}

export const addTwo = async (number: number) => {
    return await new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(number + 2)
        }, 3000)
    })
}

export const squareNumber = async (number: number) => {
    return await new Promise<number>((resolve) => {
        setTimeout(() => {
            resolve(number ** 2)
        }, 2000)
    })
}
const bai17 = async (number: number) => {
    try {

        const results: number[] = [];
        for await (const result of [multiplyByTwo(number), addTwo(number), squareNumber(number)]) {
            console.log("Result: " + result)
            results.push(result)
        }
        return results
    } catch (error) {
        console.error("Error")
    }
}

bai17(10).then((results) => console.log("Final results: " + results))