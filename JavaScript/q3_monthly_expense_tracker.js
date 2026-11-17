let expenses = [
    { category: "Food", amount: 3000 },
    { category: "Travel", amount: 2000 },
    { category: "Rent", amount: 5000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 1000 }
];

let total = 0;

for (let expense of expenses) {
    total += expense.amount;
}

let average = total / expenses.length;

let tax = total * 0.10;

let finalAmount = total;
finalAmount += tax;

console.log("Monthly Expense Report");

console.table(expenses);

console.log(`Total Expense: ₹${total.toFixed(2)}`);
console.log(`Average Expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${finalAmount.toFixed(2)}`);