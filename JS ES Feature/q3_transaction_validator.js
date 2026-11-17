const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingFieldError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingFieldError";
    }
}

class NullTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullTransactionError";
    }
}

let valid = [];
let invalid = [];

for (let transaction of transactions) {
    try {
        if (transaction === null) {
            throw new NullTransactionError("Null transaction entry");
        }

        if (transaction.id == null || transaction.amount == null) {
            throw new MissingFieldError("Missing amount or id");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Negative transaction amount");
        }

        valid.push(transaction);
        console.log("Valid Transaction:", transaction);

    } catch (error) {
        invalid.push({
            transaction: transaction,
            error: error.name,
            message: error.message
        });

        console.log("Invalid:", error.name, "-", error.message);
    }
}

console.log("\nFinal Report");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);