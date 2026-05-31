// Original Object
const student = {
    name: "Varsha",
    age: 21,
    course: "JavaScript"
};

// Proxy Handler
const handler = {

    // Intercept property access
    get(target, property) {
        console.log(`GET -> ${property}`);

        return Reflect.get(target, property);
    },

    // Intercept property update
    set(target, property, value) {
        console.log(`SET -> ${property} = ${value}`);

        if (property === "age" && value < 0) {
            console.log("Age cannot be negative!");
            return false;
        }

        return Reflect.set(target, property, value);
    },

    // Intercept property existence check
    has(target, property) {
        console.log(`HAS -> ${property}`);

        return Reflect.has(target, property);
    },

    // Intercept property deletion
    deleteProperty(target, property) {
        console.log(`DELETE -> ${property}`);

        return Reflect.deleteProperty(target, property);
    },

    // Intercept getting all keys
    ownKeys(target) {
        console.log("Getting all keys");

        return Reflect.ownKeys(target);
    }
};

// Create Proxy
const proxyStudent = new Proxy(student, handler);



// GET Operation

console.log(proxyStudent.name);



// SET Operation

proxyStudent.age = 22;

proxyStudent.age = -5; 



// HAS Operation

console.log("course" in proxyStudent);



// DELETE Operation

delete proxyStudent.course;



// OWN KEYS Operation

console.log(Object.keys(proxyStudent));



// REFLECT METHODS DIRECTLY


// Add Property
Reflect.set(student, "city", "Vijayawada");

// Read Property
console.log(Reflect.get(student, "city"));

// Check Property
console.log(Reflect.has(student, "name"));

// Delete Property
Reflect.deleteProperty(student, "city");

// Get All Keys
console.log(Reflect.ownKeys(student));


// Final Object
console.log(student);