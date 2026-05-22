// Class

class Student {
  constructor(name) {
    this.name = name;
  }
}

//Object

let s1 = new Student("Mounika");

//Encapsulation

class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

//Inheritance

class Animal {
  sound() {
    console.log(" Animal sound");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog barks");
  }
}

//Polymorphism

class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat meows");
  }
}

//Abstraction

class Car {
  start() {
    this.engine();
    console.log("Car started");
  }

  engine() {
    console.log("Engine working");
  }
}




class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let s1 = new Student("Mounika", 20);
console.log(s1.name);

class Bank {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

let account = new Bank(1000);
account.deposit(500);
console.log(account.balance);

class Person {
  speak() {
    console.log("Person speaks");
  }
}

class Teacher extends Person {
  teach() {
    console.log("Teacher teaches");
  }
}

let teacher = new Teacher();
teacher.speak();
teacher.teach();

class Singer extends Person {
  speak() {
    console.log("Singer sings");
  }
}

let singer = new Singer();
singer.speak();

class Car {
  start() {
    this.engine();
    console.log("Car started");
  }

  engine() {
    console.log("Engine working");
  }
}

let car = new Car();
car.start();