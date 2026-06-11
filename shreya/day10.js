// 1. BASIC CLASS
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hello " + this.name);
    }
    details() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let person1 = new Person("Shreya", 21);
person1.greet();
person1.details();
// 2. MULTIPLE OBJECTS
class Student {
    constructor(name, course, marks) {
        this.name = name;
        this.course = course;
        this.marks = marks;
    }
    display() {
        console.log(
            this.name,
            this.course,
            this.marks
        );
    }
}
let student1 = new Student(
    "Ram",
    "JavaScript",
    90
);
let student2 = new Student(
    "Sita",
    "Node.js",
    95
);
student1.display();
student2.display();
// 3. CLASS METHODS
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}
let calc = new Calculator();
console.log("Addition:", calc.add(10, 5));
console.log("Subtraction:", calc.subtract(10, 5));
console.log("Multiplication:", calc.multiply(10, 5));
console.log("Division:", calc.divide(10, 5));
// 4. THIS KEYWORD
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    showCar() {
        console.log(
            "Brand:",
            this.brand
        );
        console.log(
            "Model:",
            this.model
        );
    }
}
let car1 = new Car(
    "BMW",
    "X5"
);
car1.showCar();
// 5. INHERITANCE
class Animal {
    eat() {
        console.log("Animal is Eating");
    }
    sleep() {
        console.log("Animal is Sleeping");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog is Barking");
    }
}
let dog1 = new Dog();
dog1.eat();
dog1.sleep();
dog1.bark();
// 6. SUPER KEYWORD
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    showEmployee() {
        console.log(
            this.name,
            this.salary
        );
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    showManager() {
        console.log(
            this.name,
            this.salary,
            this.department
        );
    }
}
let manager1 = new Manager(
    "Shreya",
    80000,
    "IT"
);
manager1.showManager();
// 7. METHOD OVERRIDING
class Bird {
    sound() {
        console.log(
            "Bird Makes Sound"
        );
    }
}
class Parrot extends Bird {
    sound() {
        console.log(
            "Parrot Says Hello"
        );
    }
}
let parrot1 = new Parrot();
parrot1.sound();
// 8. STATIC METHODS
class MathOperations {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log(
    MathOperations.add(10, 20)
 );
console.log(
      MathOperations.multiply(5, 5)
 );
// 9. STATIC PROPERTY
class Company {
    static companyName = "OpenAI";
    static location = "USA";
}
console.log(
    Company.companyName
);
console.log(
    Company.location
);
// 10. GETTERS AND SETTERS
class User {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
   }
}
let user1 = new User("Ram");
console.log(user1.name);
user1.name = "Shyam";
console.log(user1.name);
// 11. PRIVATE FIELD
class BankAccount {
    #balance = 0;
    deposit(amount) {
        this.#balance += amount;
        console.log(
            "Balance:",
            this.#balance
        );
    }
}
let acc1 = new BankAccount();
acc1.deposit(1000);
// 12. REAL WORLD EXAMPLE
class Bank {
    static bankName = "SBI";
    constructor(customer, balance) {
        this.customer = customer;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(
            "Deposited:",
            amount
        );
        console.log(
            "Current Balance:",
            this.balance
        );
    }
    withdraw(amount) {
        this.balance -= amount;
        console.log(
            "Withdrawn:",
            amount
        );
        console.log(
            "Remaining Balance:",
            this.balance
        );
    }
    showDetails() {
        console.log(
            "Customer:",
            this.customer
        );
        console.log(
            "Balance:",
            this.balance
        );
    }
    static rules() {
        console.log(
            "Follow Banking Rules"
        );
    }
}
let customer1 = new Bank(
    "Shreya",
    5000
);
customer1.showDetails();
customer1.deposit(2000);
customer1.withdraw(1000);
Bank.rules();
console.log(Bank.bankName);
// 13. MULTILEVEL INHERITANCE
class LivingThing {
    breathe() {
        console.log(
            "Breathing..."
        );
    }
}
class Human extends LivingThing {
    walk() {
        console.log(
            "Walking..."
        );
    }
}
class Developer extends Human {
    code() {
        console.log(
            "Coding JavaScript..."
        );
    }
}
let dev1 = new Developer();
dev1.breathe();
dev1.walk();
dev1.code();
// 14. POLYMORPHISM
class Shape {
    area() {
        console.log(
            "Calculating Area"
        );
    }
}
class Circle extends Shape {
    area() {
        console.log(
            "Area of Circle"
        );
    }
}
class Rectangle extends Shape {
    area() {
        console.log(
            "Area of Rectangle"
        );
   }
}
let c1 = new Circle();
let r1 = new Rectangle();
c1.area();
r1.area();
// 15. CLASS EXPRESSION
const Mobile = class {
    constructor(brand) {
        this.brand = brand;
    }
    show() {
        console.log(
            this.brand
        );
    }
};
let mobile1 = new Mobile("Samsung");
mobile1.show();