/*
JavaScript Object Study Path
*/

// 1. Object Definitions
const student = {
    name: "John",
    age: 21,
    course: "JavaScript"
};
console.log("=== Object Definitions ===");
console.log(student);

// 2. Object "this"
const employee = {
    firstName: "Alice",
    lastName: "Smith",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log("\n=== Object 'this' ===");
console.log(employee.fullName());

// 3. Object Iterations
console.log("\n=== Object Iterations ===");
for (let key in student) 
    console.log(key + ":", student[key]);
console.log("Using Object.keys()");
Object.keys(student).forEach(key => {
    console.log(key + ":", student[key]);
});

// 4. Object Get / Set
const person = {
    firstName: "David",
    lastName: "Brown",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log("\n=== Object Get / Set ===");
console.log(person.fullName);
person.fullName = "Michael Jordan";
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

// 5. Object Management
console.log("\n=== Object Management ===");
const car = {
    brand: "Toyota",
    model: "Camry"
};
// Add property
car.year = 2024;
// Update property
car.model = "Corolla";
// Delete property
delete car.year;
console.log(car);
console.log("Keys:", Object.keys(car));
console.log("Values:", Object.values(car));
console.log("Entries:", Object.entries(car));

// 6. Object Protection
console.log("\n=== Object Protection ===");
// Prevent Extensions
const obj1 = { name: "Tom" };
Object.preventExtensions(obj1);
obj1.age = 30; // Won't be added
console.log("preventExtensions:", obj1);
// Seal
const obj2 = { city: "New York" };
Object.seal(obj2);
obj2.city = "Chicago"; // Allowed
delete obj2.city;      // Not allowed
console.log("seal:", obj2);
// Freeze
const obj3 = { country: "USA" };
Object.freeze(obj3);
obj3.country = "India"; // Not allowed
console.log("freeze:", obj3);


// 7. Object Prototypes
console.log("\n=== Object Prototypes ===");
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(this.name + " makes a sound.");
};
const dog = new Animal("Dog");
dog.speak();
console.log(
    "Prototype check:",
    Object.getPrototypeOf(dog) === Animal.prototype
);


// 8. Object Reference
console.log("\n=== Object Reference ===");
const original = {
    name: "Laptop",
    price: 50000
};
// Reference Copy
const referenceCopy = original;
referenceCopy.price = 60000;
console.log("Original:", original);
console.log("Reference Copy:", referenceCopy);
// Shallow Copy
const shallowCopy = { ...original };
shallowCopy.price = 70000;
console.log("Original After Shallow Copy:", original);
console.log("Shallow Copy:", shallowCopy);
