export class User {
    private name: string = "";

    // Getters
    public getName(): string {
        return this.name;
    }

    // Setters
    public setName(name: string): void {
        this.name = name;
    }
    // constructor(name: string) {
    //     this.name = name
    // }

}