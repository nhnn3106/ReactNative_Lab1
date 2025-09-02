export class User {
    id: number;
    name: string;
    email: string;
    constructor(id: number, name: string, email: string) {
        this.id = id
        this.name = name
        this.email = email
    }
    displayInfo(): string {
        return (`User=[id: ${this.id}, name: ${this.name}, age: ${this.email}]`)
    }
}
const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
        reject(new Error("Request for user time out after 2000ms"))
    }, 2000)
})
const fetchUser = async (id: number) => {
    return await new Promise<User>((resolve) => {
        setTimeout(() => {
            resolve(new User(id, `User ${id}`, `user${id}@gmail.com`))
        }, 1000)
    })
}
const bai20 = async () => {
    try {
        const result = await Promise.race([timeoutPromise, fetchUser(20)])
        return result
    } catch (error: any) {
        throw Error()
    }
}

bai20().then((user) => console.log(user)).catch((error: Error) => console.error("Test error: " + error.message))