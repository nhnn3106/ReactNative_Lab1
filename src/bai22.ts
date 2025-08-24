export class Stack<T> {
    private arr: T[] = [];
    isEmpty(): boolean {
        return this.arr.length === 0;
    }
    push(value: T): void {
        this.arr.push(value)
    }
    pop(): T | undefined {
        if (this.isEmpty()) {
            console.log("Stack is empty. Cannot pop.");
            return undefined
        }
        return this.arr.pop()

    }
    peek(): T | undefined {
        if (this.isEmpty()) {
            console.log("Stack is empty. Nothing to peek.");
            return undefined
        }
        return this.arr[this.arr.length - 1]
    }
    print(): void {
        console.log(`Stack has ${this.arr}.`);
    }
}