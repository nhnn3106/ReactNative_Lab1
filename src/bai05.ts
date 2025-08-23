export class BankAccount {
    balance: number;
    constructor(balance: number) {
        this.balance = balance
    }
    deposit(amount: number): void {
        if (amount <= 0) { console.log("Amount must be greater than 0"); return; }
        this.balance += amount
        console.log(`Deposit $${amount}. New balance: ${this.balance}`)
    }
    withdraw(amount: number): void {
        if (amount <= 0) { console.log("Amount must be greater than 0"); return; }
        if (this.balance - amount < 0) { console.log("Balance is not enough to withdraw this amount"); return; }
        this.balance += amount
        console.log(`Withdraw $${amount}. New balance: ${this.balance}`)
    }
}