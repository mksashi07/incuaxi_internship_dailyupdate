// class 
class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

const s1 = new Student("mahaboob", 20);

s1.display();

class Employee {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    details() {
        console.log("Employee Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

const emp1 = new Employee("suheal", 50000);

emp1.details();

class Addition {

    add(a, b) {
        console.log("Addition =", a + b);
    }
}

const obj = new Addition();

obj.add(10, 20);

class BankAccount {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Updated Balance =", this.balance);
    }
}

const user1 = new BankAccount("Syed", 1000);

user1.deposit(500);