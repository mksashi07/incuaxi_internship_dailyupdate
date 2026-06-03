// 1. Arrow Function
const greet = (name) => `Hello ${name}`;
console.log(greet("Surya"));


// 2. Template Literal
const userName = "Surya";
const age = 22;
console.log(`My name is ${userName} and I am ${age} years old.`);


// 3. Array Destructuring
const fruits = ["Apple", "Mango", "Orange"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit);
console.log(secondFruit);
console.log(thirdFruit);


// 4. Object Destructuring
const student = {
    name: "Surya",
    course: "Node.js",
    city: "Hyderabad"
};
const { name, course, city } = student;
console.log(name);
console.log(course);
console.log(city);


// 5. Spread Operator
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "MongoDB"];
const fullStack = [...frontend, ...backend];
console.log(fullStack);
const newStudent = {
    ...student,
    age: 22
};
console.log(newStudent);


// 6. DOM Manipulation
const heading = document.getElementById("title");
if (heading) {
    heading.innerText = "DOM Updated Successfully";
}


// 7. Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }

});
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


// 8. Async / Await
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received From Server");
        }, 2000);
    });
}
async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
getData();