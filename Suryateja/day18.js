// Class
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Object Method
    displayInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

// Inheritance
class Student extends Person {
    // Constructor
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
    displayCourse() {
        console.log("Course:", this.course);
    }
}

// Encapsulation
class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    deposit(amount) {
        this.#balance += amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance");
        }
    }
    getBalance() {
        return this.#balance;
    }
}

// Object Creation
const person1 = new Person("Surya", 22);
console.log("Person Details");
person1.displayInfo();

// Object Creation using Inheritance
const student1 = new Student(
    "Teja",
    21,
    "JavaScript"
);
console.log("Student Details");
student1.displayInfo();
student1.displayCourse();


// Encapsulation Example
const account1 = new BankAccount(
    10000
);
console.log(
    "Current Balance:",
    account1.getBalance()
);
account1.deposit(
    2000
);
console.log(
    "Balance After Deposit:",
    account1.getBalance()
);
account1.withdraw(
    3000
);
console.log(
    "Balance After Withdraw:",
    account1.getBalance()
);
account1.withdraw(
    15000
);
console.log(
    "Final Balance:",
    account1.getBalance()
);


// More Objects
const person2 = new Person(
    "Rahul",
    25
);
person2.displayInfo();
const student2 = new Student(
    "Kiran",
    20,
    "React JS"
);
student2.displayInfo();
student2.displayCourse();