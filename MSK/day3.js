// Expense Tracker

let expenses = [];

// Add Expense Function
function addExpense(title, amount) {

    const expense = {
        id: Date.now(),
        title: title,
        amount: amount
    };

    expenses.push(expense);

    console.log("Expense Added Successfully!");
}

// View Expenses
function viewExpenses() {

    console.log("\n===== EXPENSE LIST =====");

    if (expenses.length === 0) {
        console.log("No Expenses Found");
        return;
    }

    expenses.forEach((expense, index) => {

        console.log(
            `${index + 1}. ${expense.title} - ₹${expense.amount}`
        );

    });
}

// Calculate Total Expense
function calculateTotal() {

    let total = 0;

    expenses.forEach((expense) => {
        total += expense.amount;
    });

    console.log("\nTotal Expense: ₹" + total);
}

// Find Highest Expense
function highestExpense() {

    if (expenses.length === 0) {
        console.log("No Expenses Available");
        return;
    }

    let highest = expenses[0];

    expenses.forEach((expense) => {

        if (expense.amount > highest.amount) {
            highest = expense;
        }

    });

    console.log(
        `Highest Expense: ${highest.title} - ₹${highest.amount}`
    );
}

// Add Sample Expenses
addExpense("Food", 250);
addExpense("Travel", 500);
addExpense("Shopping", 1200);

// Display Data
viewExpenses();
calculateTotal();
highestExpense();