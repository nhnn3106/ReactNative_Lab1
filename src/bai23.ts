interface Payment {
    pay(amount: number): void
}

export class CashPayment implements Payment {
    pay(amount: number): void {
        console.log(`You paid $${amount} by cash.`)
    }
}


export class CardPayment implements Payment {
    pay(amount: number): void {
        console.log(`You paid $${amount} by card.`)
    }
}