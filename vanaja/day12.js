// Original Object
const student = {
    id: 101,
    name: "Vanaja",
    age: 21,
    course: "JavaScript",
    city: "Vijayawada"
};
// Proxy Handler
const handler = {
    // GET Trap
    get(target, property) {
        console.log(`GET -> ${property}`);
        return target[property];
    },
    // SET Trap
    set(target, property, value) {
        console.log(`SET -> ${property} = ${value}`);
        if (property === "age" && value < 18) {
            console.log("Age must be 18 or above");
            return false;
        }
        target[property] = value;
        return true;
    },
    // HAS Trap
    has(target, property) {
        console.log(`HAS -> ${property}`);
        return property in target;
    },
    // DELETE Trap
    deleteProperty(target, property) {
        console.log(`DELETE -> ${property}`);
        delete target[property];
        return true;
    },
    // OWN KEYS Trap
    ownKeys(target) {
        console.log("OWN KEYS CALLED");
        return Reflect.ownKeys(target);
    }
};
// Create Proxy
const proxyStudent = new Proxy(student, handler);
// GET Examples
console.log(proxyStudent.id);
console.log(proxyStudent.name);
console.log(proxyStudent.age);
console.log(proxyStudent.course);
console.log(proxyStudent.city);
// SET Examples
proxyStudent.name = "Srii";
proxyStudent.age = 22;
proxyStudent.course = "Node.js";
proxyStudent.city = "Hyderabad";
console.log(proxyStudent.name);
console.log(proxyStudent.age);
// Validation Example
proxyStudent.age = 15;
// HAS Examples
console.log("name" in proxyStudent);
console.log("salary" in proxyStudent);
// DELETE Example
delete proxyStudent.course;
console.log(proxyStudent.course);
// Add New Properties
proxyStudent.salary = 50000;
proxyStudent.company = "IncuxAI";
proxyStudent.role = "Intern";
console.log(proxyStudent.salary);
console.log(proxyStudent.company);
console.log(proxyStudent.role);
// Object Keys
console.log(Object.keys(proxyStudent));
// Reflect Methods
Reflect.set(proxyStudent, "department", "Development");
Reflect.set(proxyStudent, "experience", "2 Months");
console.log(Reflect.get(proxyStudent, "department"));
console.log(Reflect.get(proxyStudent, "experience"));
console.log(Reflect.has(proxyStudent, "city"));
console.log(Reflect.has(proxyStudent, "phone"));
Reflect.deleteProperty(proxyStudent, "experience");
console.log(proxyStudent);
// Loop Through Properties
for (let key in proxyStudent) {
    console.log(key + " : " + proxyStudent[key]);
}
// Final Object
console.log("Final Student Object");
console.log(proxyStudent);