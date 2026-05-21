// class
class Student1 {
  name = "Surya";
}
let s1 = new Student1();
document.write(s1.name + "<br><br>");


// object
class Car {
  brand = "BMW";
}
let c1 = new Car();
document.write(c1.brand + "<br><br>");


// constructor
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}
let e1 = new Employee("Surya", 50000);
document.write(e1.name + "<br>");
document.write(e1.salary + "<br><br>");


// abstraction
class ATM {
  withdraw() {
    this.#process();
    document.write("Money Withdrawn <br><br>");
  }
  #process() {
    document.write("Processing...<br>");
  }
}
let user = new ATM();
user.withdraw();


// encapsulation
class Student2 {
  #marks = 90;
  getMarks() {
    return this.#marks;
  }
}
let s2 = new Student2();
document.write(s2.getMarks() + "<br><br>");


// inheritance
class Animal1 {
  eat() {
    document.write("Animal Eats <br><br>");
  }
}
class Dog1 extends Animal1 {
}
let d1 = new Dog1();
d1.eat();


//1. single level inheritance
class Father1 {
  house() {
    document.write("Father House <br><br>");
  }
}
class Son1 extends Father1 {
}
let son1 = new Son1();
son1.house();


// 2.multi level inheritance
class GrandFather {
  land() {
    document.write("GrandFather Land <br>");
  }
}
class Father2 extends GrandFather {
  house() {
    document.write("Father House <br>");
  }
}
class Son2 extends Father2 {
  bike() {
    document.write("Son Bike <br><br>");
  }
}
let son2 = new Son2();
son2.land();
son2.house();
son2.bike();


// 3.hierarchical inheritance
class Animal2 {
  eat() {
    document.write("Animal Eats <br>");
  }
}
class Dog2 extends Animal2 {
  bark() {
    document.write("Dog Barks <br>");
  }
}
class Cat1 extends Animal2 {
  meow() {
    document.write("Cat Meows <br><br>");
  }
}
let dog2 = new Dog2();
dog2.eat();
dog2.bark();
let cat1 = new Cat1();
cat1.eat();
cat1.meow();


// polymorphism
class Animal3 {
  sound() {
    document.write("Animal Sound <br>");
  }
}
class Dog3 extends Animal3 {
  sound() {
    document.write("Dog Barks <br><br>");
  }
}
let dog3 = new Dog3();
dog3.sound();


// 1.method overriding
class Animal4 {
  sound() {
    document.write("Animal Sound <br>");
  }
}
class Cat2 extends Animal4 {
  sound() {
    document.write("Cat Meows <br><br>");
  }
}
let cat2 = new Cat2();
cat2.sound();


// 2.method overloading
class Demo {
  add(a, b, c) {
    if (c === undefined) {
      return a + b;
    }
    return a + b + c;
  }
}
let demo = new Demo();
document.write(demo.add(10, 20) + "<br>");
document.write(demo.add(10, 20, 30));