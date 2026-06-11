//FUNCTIONS IN ANDVANCED
//Function Declaration - is a named function created using the function keyword
function calculateArea(length, width) {
    return length * width;
}

console.log("Area:", calculateArea(15, 5));

// Function Expression  -  It stores a function inside a variable.
const divide = function(a, b) {
    return a / b;
};

console.log("Division:", divide(24, 4));

//Arrow Functions  -  It provide a shorter syntax for writing functions and do not have their own this.
const cube = num => num * num * num;

console.log("Cube:", cube(3));

//Default parameters- It allow you to assign default values to function parameters if no value is provided.
function login(username = "Guest User") {
    return `Hello ${username}`;
}

console.log(login());
console.log(login("Mounika"));

//Rest Parameter - It  collects multiple arguments into a single array.
function calculateSum(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(calculateSum(10, 20, 30, 40));

//Object is a collection of key-value pairs used to store related data.
const car = {
    brand: "Toyota",
    model: "Innova",
    year: 2024,

    displayCar() {
        console.log(
            `Brand: ${this.brand}
Model: ${this.model}
Year: ${this.year}`
        );
    }
};

car.displayCar();

//Accessing Object Properties
console.log(car.brand);

console.log(car["model"]);

//Adding Properties
car.color = "White";

console.log(car);

//Updating Properties
car.year = 2025;

console.log(car);

//Deleting Properties
delete car.color;
console.log(car);

//Destructuring - It allows extracting object properties into variables.
const laptop = {
    company: "Dell",
    ram: "16GB",
    processor: "Intel i7"
};

const {
    company,
    ram,
    processor
} = laptop;

console.log(company);
console.log(ram);
console.log(processor);

//Object.keys() - Returns all object keys as an array.
console.log(Object.keys(laptop));

//Object.values() - 
console.log(Object.values(laptop));

//A Class is a blueprint used to create objects with properties and methods.
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    showDetails() {
        console.log(
            `Employee: ${this.name}
Department: ${this.department}`
        );
    }
}

const emp1 =
    new Employee(
        "Rahul",
        "IT"
    );

emp1.showDetails();

//Inheritance allows one class to acquire properties and methods from another class.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(
            `${this.name} makes a sound`
        );
    }
}

class Dog extends Animal {
    bark() {
        console.log(
            `${this.name} barks`
        );
    }
}

const dog =
    new Dog("Tommy");

dog.speak();

dog.bark();

//Encapsulation hides internal data and allows controlled access through methods.
class Wallet {
    #money = 0;

    addMoney(amount) {
        this.#money += amount;
    }

    spendMoney(amount) {
        this.#money -= amount;
    }

    getMoney() {
        return this.#money;
    }
}

const myWallet =
    new Wallet();

myWallet.addMoney(2000);

myWallet.spendMoney(500);

console.log(
    myWallet.getMoney()
);

//A Promise represents a value that may be available now, later, or never.
const orderFood =
    new Promise(
        (resolve, reject) => {

            let restaurantOpen = true;

            setTimeout(() => {

                if (
                    restaurantOpen
                ) {
                    resolve(
                        "Food Delivered"
                    );
                } else {
                    reject(
                        "Restaurant Closed"
                    );
                }

            }, 2000);
        }
    );

orderFood
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

    //async/await makes asynchronous code look like synchronous code.
    function fetchProduct() {

    return new Promise(
        resolve => {

            setTimeout(() => {

                resolve({
                    id: 101,
                    product:
                    "Laptop",
                    price: 50000
                });

            }, 2000);

        }
    );
}

async function displayProduct() {

    console.log(
        "Loading Product..."
    );

    const product =
        await fetchProduct();

    console.log(product);
}

displayProduct();

//map() creates a new array by transforming each element.
const prices =
    [100, 200, 300];

const discounted =
    prices.map(
        price =>
        price - 20
    );

console.log(discounted);

//filter() creates a new array containing only elements that satisfy a condition.
const products = [
    {
        name: "Laptop",
        stock: true
    },
    {
        name: "Mobile",
        stock: false
    },
    {
        name: "Keyboard",
        stock: true
    }
];

const availableProducts =
    products.filter(
        product =>
        product.stock
    );

console.log(
    availableProducts
);

