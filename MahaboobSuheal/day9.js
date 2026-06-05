// inheritance

class Animal {

    eat() {
        console.log("Animal is eating");
    }

}


class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }

}


const d1 = new Dog();


d1.eat();


d1.bark();

// another example

class Vehicle {

    start() {
        console.log("Vehicle Started");
    }

}

class Bike extends Vehicle {

    ride() {
        console.log("Bike is Riding");
    }

}

const b1 = new Bike();

b1.start();
b1.ride();
