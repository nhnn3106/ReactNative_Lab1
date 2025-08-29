export class Reposity<T> {
    array: T[];
    constructor(array: T[]) {
        this.array = array;
    }
    add(value: T): void {
        this.array.push(value);
    }
    getAll(): void {
        console.log(`Entire data of this array: ${this.array}`)
    }
}