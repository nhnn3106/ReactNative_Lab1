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

const bai15 = async (number: number) => {
    try {
        console.log(`Number: ${number}`)

        const result1 = await multiplyByTwo(number)
        console.log(`After mutilply: ${result1}`)

        const result2 = await addTwo(result1)
        console.log(`After add two: ${result2}`)

        const final = await squareNumber(result2)
        console.log(`After squared: ${final}`)

        return final;

    } catch (error) {
        throw new Error("Error occurred");

    }
}

bai15(10).then(result => console.log(result))