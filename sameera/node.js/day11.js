//testing and debugging
//Student Grade Calculator
function calculateGrade(marks) {
    if (!Array.isArray(marks)) {
        throw new Error("Marks should be an array");
    }

    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;

    if (average >= 90) return "A";
    if (average >= 75) return "B";
    if (average >= 60) return "C";

    return "D";
}

try {
    const marks = [85, 90, 78, 92];
    const grade = calculateGrade(marks);

    console.log("Grade:", grade);
} catch (error) {
    console.error(error.message);
}
//Advanced Node Debugging
function calculateSalary(employee) {
    debugger;

    const basic = employee.basicSalary;
    const hra = basic * 0.2;
    const bonus = basic * 0.1;

    return basic + hra + bonus;
}

const employees = [
    { name: "John", basicSalary: 30000 },
    { name: "David", basicSalary: 40000 },
    { name: "Sam", basicSalary: 50000 }
];

employees.forEach(emp => {
    const salary = calculateSalary(emp);

    console.log(`${emp.name}: ${salary}`);
});
//Node Testing Apps
//Shopping Cart
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price) {
        this.items.push({ name, price });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price,
            0
        );
    }
}

module.exports = Cart;
//Node Test Frameworks (Jest)
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }

        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

module.exports = BankAccount;
//node test runner
//product inventory
class Inventory {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getCount() {
        return this.products.length;
    }
}

module.exports = Inventory;
