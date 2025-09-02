import { helloPromise } from "../A/bai01"

const bai11 = async () => {
    const result = await helloPromise;
    return result;
}

bai11()