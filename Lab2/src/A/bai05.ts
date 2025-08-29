export const simulateTask = (time: number) => {
    return new Promise((resolve) => {
        
        setTimeout(
            () => {resolve("Task done")}, 
            time
        )
    })
}

simulateTask(1000).then((result) => console.log(result))

