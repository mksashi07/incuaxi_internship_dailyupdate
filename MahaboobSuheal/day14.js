class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    get balance() {
        return `₹${this._balance}`;
    }

    set balance(amount) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.log("Invalid amount");
        }
    }
}

const account = new BankAccount(5000);

console.log(account.balance);

account.balance = 8000;
console.log(account.balance);

account.balance = -1000;