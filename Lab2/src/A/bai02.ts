export const bai02 = () => {
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(10)
    }, 1000)
})}


bai02().then((result) => {
    console.log(result)
})
