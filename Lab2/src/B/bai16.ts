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
const number = 10

const bai16 = async (number: number) => {
    const results = await Promise.all([multiplyByTwo(number), addTwo(number), squareNumber(number)])

    console.log(`Multiply by two: ${results[0]}`);
    console.log(`Add two: ${results[1]}`);
    console.log(`Squared: ${results[2]}`);

    return results;
}

bai16(10).then((results) => console.log('Final results: ' + results))