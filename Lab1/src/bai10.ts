export class Account {
    public accountHolder: string = "";
    private balance: number = 0;
    readonly accountNumber: string;
    // Getters
    public getBalance(): number {
        return this.balance;
    }

    // Setters
    public setBalance(balance: number): void {
        this.balance = balance;
    }
    constructor(accountNumber: string, accountHolder?: string, balance?: number) {
        this.accountNumber = accountNumber;
        if (accountHolder !== undefined) {
            this.accountHolder = accountHolder;
        }
        if (balance !== undefined) {
            this.balance = balance;
        }
    }
}