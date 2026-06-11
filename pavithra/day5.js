class Mobile {
    constructor(brand) {
        this.brand = brand;
    }
    call() {
        console.log(this.brand + " Calling...");
    }
}
const phone = new Mobile("Samsung");

phone.call();
//class in oops
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//objects
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const s1 = new Student("Pavithra", 21);
console.log(s1.name);
console.log(s1.age);
//encapsulation
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    showBalance() {
        console.log(this.balance);
    }
}
const acc = new BankAccount(1000);
acc.deposit(500);
acc.showBalance();
//inheritance
class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Dog barks");
    }
}
const d = new Dog();
d.sound();
d.bark();
//polymorphism
class Animal {
    sound() {
        console.log("Animal sound");
    }
}
class Cat extends Animal {
    sound() {
        console.log("Meow");
    }
}
class Dog extends Animal {
    sound() {
        console.log("Bark");
    }
}
const c = new Cat();
const d = new Dog();
c.sound();
d.sound();
//abstraction
class Car {
    start() {
        console.log("Car Started");
    }
}
const c = new Car();
c.start();
//atm machine
class ATM {
    constructor(balance) {
        this.balance = balance;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdraw Success");
        } else {
            console.log("Insufficient Balance");
        }
    }
    checkBalance() {
        console.log("Balance:", this.balance);
    }
}
const user = new ATM(5000);
user.withdraw(2000);
user.checkBalance();