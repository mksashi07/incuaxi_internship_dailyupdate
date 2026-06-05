// inheritance 

class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} is eating`);
    }

    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
}

class Elephant extends Animal {
    name = "elephant";
}

class Zebra extends Animal {
    name = "zebra";
}

class Fish extends Animal {
    name = "fish";
}

const rabbit = new Rabbit();
const elephant = new Elephant();
const zebra = new Zebra();
const fish = new Fish();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();

console.log(elephant.alive);
elephant.eat();
elephant.sleep();

console.log(zebra.alive);
zebra.eat();
zebra.sleep();

console.log(fish.alive);
fish.eat();
fish.sleep();

// super keyword --> it is used to call the constructor or
//           acccess the properties and methods of a parent (superclass)
//     this = this object 
//     this = this parent 

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class BabyRabbit extends Animals {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Dolphins extends Animals {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Deer extends Animals {
    constructor(name, age, attackingSpeed) {
        super(name, age);
        this.attackingSpeed = attackingSpeed;
    }
}

const rabbit1 = new BabyRabbit("Rabbi", 1, 12);
const dolphin1 = new Dolphins("Dolly", 2, 45);
const deer1 = new Deer("Deera", 9, 99);

console.log(rabbit1);
console.log(dolphin1);
console.log(deer1);

// example 2

class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    displayInfo() {
        console.log(`Brand: ${this.brand}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor(brand, year, seats) {
        super(brand, year);
        this.seats = seats;
    }
}

class Bike extends Vehicle {
    constructor(brand, year, mileage) {
        super(brand, year);
        this.mileage = mileage;
    }
}

class Truck extends Vehicle {
    constructor(brand, year, loadCapacity) {
        super(brand, year);
        this.loadCapacity = loadCapacity;
    }
}

const car1 = new Car("Toyota", 2023, 5);
const bike1 = new Bike("Honda", 2024, 60);
const truck1 = new Truck("Tata", 2022, "10 Tons");

console.log(car1);
console.log(bike1);
console.log(truck1);

car1.displayInfo();
bike1.displayInfo();
truck1.displayInfo();