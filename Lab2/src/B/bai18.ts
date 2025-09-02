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

export const fetchUser = async (id: number) => {
    return await new Promise<User>((resolve) => {
        setTimeout(() => {
            resolve(new User(id, `User ${1}`, `user${1}@gmail.com`))
        }, 1000)
    })
}

fetchUser(1).then((result) => console.log(`Successfully fetch user: ${result.displayInfo()}`))