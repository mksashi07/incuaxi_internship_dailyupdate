// Higher-Order Function Example

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log("Addition:", calculate(10, 5, add));
console.log("Multiplication:", calculate(10, 5, multiply));

// Returning a function

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double:", double(10));
console.log("Triple:", triple(10));
// Generator Function Example

function* generateEmployeeIds() {
    let id = 1;

    while (true) {
        yield id++;
    }
}

const employeeIds = generateEmployeeIds();

console.log(employeeIds.next().value);
console.log(employeeIds.next().value);
console.log(employeeIds.next().value);
console.log(employeeIds.next().value);

// Generator with Multiple Yields

function* skillsGenerator() {
    yield "JavaScript";
    yield "Node.js";
    yield "React";
    yield "MongoDB";
}

const skills = skillsGenerator();

for (const skill of skills) {
    console.log("Skill:", skill);
}
// Private Fields Example

class BankAccount {
    #balance;

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ₹${amount}`);
        }
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrawn ₹${amount}`);
        } else {
            console.log("Insufficient Balance");
        }
    }

    getBalance() {
        return this.#balance;
    }
}
const account = new BankAccount("Sravya", 10000);
account.deposit(5000);
account.withdraw(3000);

console.log("Current Balance:", account.getBalance());

// Error:
// console.log(account.#balance);
class EmployeeManager {
    #employees = [];

    addEmployee(name) {
        this.#employees.push(name);
    }

    getEmployees() {
        return [...this.#employees];
    }
}

function* employeeGenerator(employees) {
    for (const employee of employees) {
        yield employee;
    }
}

function processEmployees(employees, callback) {
    employees.forEach(callback);
}
const manager = new EmployeeManager();
manager.addEmployee("Manju");
manager.addEmployee("Sravya");
manager.addEmployee("Rahul");
const employeeList = manager.getEmployees();
// Higher-Order Function
processEmployees(employeeList, (employee) => {
    console.log("Employee:", employee);
});
// Generator
const generator = employeeGenerator(employeeList);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);