//OOPS CONCEPTS
//Object - it is a collections of properities and methods
let student = {
    name: "Mounika",
    rollno: 2335175,
    display() {
        console.log("Name:", this.name);
        console.log("rollno:", this.rollno);
    }
};
student.display();
//Class -  it is a blueprint for creating objects
class House {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    details() {
        console.log("House Name:", this.name);
        console.log("Color:", this.color);
    }
}
let House1  = new House("Chandrakala", "Black");
House1.details();
//Constructor - it is a method to used to initialize object values automatically when an object is created.
class StudentMarks {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}
let Student1 = new StudentMarks("Surya", 50);
console.log(Student1.name);
console.log(Student1.marks);
//Encapsulation - It  helps to protect data from direct access.
class BankAccount {
    balance = 1000;

    deposit(amount) {
        this.balance += amount;
        console.log("Updated Balance:", this.balance);
    }
}
let acc = new BankAccount();
//Inheritance - it means one class can use properties and methods of another class.
class Students {
    sound() {
        console.log("Student makes sound");
    }
}

class Mounika extends Students {
    eat() {
        console.log("Mounika eats mango");
    }
}

let m1 = new Mounika();

m1.sound();
m1.eat();
//Polymorphism- it means one method can behave differently in different classes.
class Shape {
    draw() {
        console.log("Drawing Shape");
    }
}
class Circle extends Shape {
    draw() {
        console.log("Drawing Circle");
    }
}
let c = new Circle();
c.draw();
//Abstraction - means hiding internal details and showing only essential features.
class ATM {
    withdraw(amount) {
        this.process(amount);
    }
    process(amount) {
        console.log(amount, "withdrawn successfully");
    }
}
let user = new ATM();
user.withdraw(2000);
//this keyword - it  refers to the current object.
class Puneeth {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}
let p1 = new Puneeth("Mounika");
p1.show();
// static method- it belongs to the class, not the object.
class Subtraction {
    static sub(a, b) {
        return a - b;
    }
}
console.log(Subtraction.sub(10, 20));
//Getter - get value
//Setter - set value
class Student {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let s1 = new Student();
s1.setName("Vaishu");
console.log(s1.getName());

