const downloadFile = async (fileName: string) => {
    console.log("Downloading file " + fileName + ".....")
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done downloading.")
            reject("Failed to download " + fileName + ".")
        }, 3000)
    })
}

downloadFile("react-native.pdf")
    .then((res) => console.log(res))
    .catch((er) => console.error(er))
