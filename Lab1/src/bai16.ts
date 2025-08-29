export class Box<T> {
    value: T;

    // Getters
    public getT(): T {
        return this.value;
    }

    // Setters
    public setT(t: T): void {
        this.value = t;
    }
    constructor(value: T) {
        this.value = value
    }
}