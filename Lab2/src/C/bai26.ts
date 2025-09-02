const bai26 = async () => {
    console.log("Waiting.....")
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done waiting.")
        }, 5000)
    })
}

bai26()
    .then((res) => console.log(res))
    .catch((err) => console.error(err))