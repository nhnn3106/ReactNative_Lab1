const bai14 = async (number: number) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number * 3)
        }, 1000)
    })
    const result = await promise;
    return result
}

bai14(5).then(result => console.log(result))