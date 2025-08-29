export const bai03 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Somethine went wrong")
        },  1000)
    })
}


bai03().catch((result) => {
    console.log(result)
})
