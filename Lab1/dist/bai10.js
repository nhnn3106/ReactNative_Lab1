"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    // Getters
    getBalance() {
        return this.balance;
    }
    // Setters
    setBalance(balance) {
        this.balance = balance;
    }
    constructor(accountNumber, accountHolder, balance) {
        this.accountHolder = "";
        this.balance = 0;
        this.accountNumber = accountNumber;
        if (accountHolder !== undefined) {
            this.accountHolder = accountHolder;
        }
        if (balance !== undefined) {
            this.balance = balance;
        }
    }
}
exports.Account = Account;
