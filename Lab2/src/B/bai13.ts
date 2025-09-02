import { helloPromise } from "../A/bai01"
import { simulateTask } from "../A/bai05"

const bai13 = async () => {
    try {
        const result = await simulateTask(2000)
        return result
    } catch (error: any) {
        console.error("Error occured: ", error.message)
        throw error
    }
}

bai13()