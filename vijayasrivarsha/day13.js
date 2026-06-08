
// Reflect Methods 

// Reflect.apply()

function greet(name) {
    return `Hello ${name}`;
}

console.log("Reflect.apply():");
console.log(
    Reflect.apply(greet, null, ["John"])
);

// Reflect.construct()

function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log("\nReflect.construct():");
const person = Reflect.construct(Person, ["Alice", 25]);
console.log(person);


// Base Object

const user = {
    name: "Vijay",
    age: 22
};

console.log("\nOriginal Object:");
console.log(user);

// Reflect.defineProperty()

console.log("\nReflect.defineProperty():");

Reflect.defineProperty(user, "city", {
    value: "Chennai",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(user);

// Reflect.get()

console.log("\nReflect.get():");
console.log(
    Reflect.get(user, "name")
);

// Reflect.set()

console.log("\nReflect.set():");

Reflect.set(user, "age", 23);

console.log(user);


// Reflect.has()

console.log("\nReflect.has():");

console.log(
    Reflect.has(user, "name")
);

console.log(
    Reflect.has(user, "salary")
);

// Reflect.getOwnPropertyDescriptor()

console.log("\nReflect.getOwnPropertyDescriptor():");

console.log(
    Reflect.getOwnPropertyDescriptor(user, "city")
);

// Reflect.ownKeys()

console.log("\nReflect.ownKeys():");

console.log(
    Reflect.ownKeys(user)
);


// Reflect.getPrototypeOf()

console.log("\nReflect.getPrototypeOf():");

console.log(
    Reflect.getPrototypeOf(user)
);


// Reflect.setPrototypeOf()

console.log("\nReflect.setPrototypeOf():");

const employeeMethods = {
    work() {
        return "Working...";
    }
};

Reflect.setPrototypeOf(user, employeeMethods);

console.log(user.work());


// Reflect.isExtensible()

console.log("\nReflect.isExtensible():");

console.log(
    Reflect.isExtensible(user)
);


// Reflect.preventExtensions()

console.log("\nReflect.preventExtensions():");

Reflect.preventExtensions(user);

console.log(
    Reflect.isExtensible(user)
);

// Try adding property
user.salary = 50000;

console.log(user);


// Reflect.deleteProperty()

console.log("\nReflect.deleteProperty():");

Reflect.deleteProperty(user, "city");

console.log(user);


// Final Object

console.log("\nFinal Object:");

console.log(user);