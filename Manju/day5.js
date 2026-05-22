
//  PUSH()  -> Add element at end
let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);
//  POP() -> Remove last element
let colors = ["Red", "Blue", "Green"];
let removedColor = colors.pop();
console.log(removedColor); 
console.log(colors); 
// 3. QUEUE (FIFO)
// First In First Out
let queue = [];

// Add elements
queue.push("Person1");
queue.push("Person2");
queue.push("Person3");
console.log(queue);
// Remove first element
let served = queue.shift();
// STACK (LIFO)
// Last In First Out
let stack = [];
// Add elements
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack);
// Remove last element
let top = stack.pop();
console.log(top); // 30
console.log(stack);
//  SHIFT() -> Remove first element
let numbers1 = [1, 2, 3, 4];
let first = numbers1.shift();
console.log(first); 
console.log(numbers1); 
// UNSHIFT() -> Add at beginning
let numbers2 = [2, 3, 4];
numbers2.unshift(1);
console.log(numbers2);
// SLICE() -> Copy part of array
// Does NOT change original array
let marks = [10, 20, 30, 40, 50];
console.log(marks); 
let newMarks = marks.slice(1, 4);

console.log(newMarks); // [20,30,40]

// SPLICE() -> Add/Remove elements
// Changes original array
let animals = ["Cat", "Dog", "Lion"];
animals.splice(1, 1);
console.log(animals); 
// Add element
animals.splice(1, 0, "Tiger");
console.log(animals);
//  THIS keyword
// Refers to current object
const student = {
  name: "Yashasri",
  age: 20,

  details: function () {
    console.log(this.name);
    console.log(this.age);
  }
};
student.details();
//  CONSTRUCTOR FUNCTION
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
const car1 = new Car("Toyota", "Innova");
console.log(car1.brand);
console.log(car1.model);
//  CLASS
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  showDetails() {
    console.log(this.name, this.salary);
  }
}
const emp1 = new Employee("Rahul", 50000);
emp1.showDetails();
//  INHERITANCE
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

const d1 = new Dog();

d1.sound();
d1.bark();

// 13. SUPER keyword
// Used to call parent constructor
class Person {
  constructor(name) {
    this.name = name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name); 
    this.subject = subject;
  }

  display() {
    console.log(this.name);
    console.log(this.subject);
  }
}

const t1 = new Teacher("Anu", "Maths");

t1.display();

//  GETTER

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

const u1 = new User("Kiran");

console.log(u1.name);

// SETTER

class User2 {
  constructor(name) {
    this._name = name;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }
}

const u2 = new User2("Ravi");
u2.name = "Krishna";
console.log(u2.name);

//  DESTRUCTURING ARRAY
let arr = [100, 200, 300];
let [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

//  DESTRUCTURING OBJECT

const person = {
  fullname: "Sita",
  city: "Hyderabad"
};

const { fullname, city } = person;
console.log(fullname);
console.log(city);

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  get result() {
    return this.marks >= 35 ? "Pass" : "Fail";
  }

  set updateMarks(newMarks) {
    this.marks = newMarks;
  }

  display() {
    console.log(this.name);
    console.log(this.marks);
    console.log(this.result);
  }
}
const s1 = new Student("Yash", 30);
s1.display();
s1.updateMarks = 80;
s1.display();