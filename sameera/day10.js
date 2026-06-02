//Intermediate Javascript
//REGULAR EXPRESSIONS
let text = "I love JavaScript!";
console.log(text.match(/javascript/));
//Email Validation
let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/g;
let validEmail = "maaike_1234@email.com";
let invalidEmail = "maaike@mail@.com";
console.log(validEmail.match(emailPattern));
console.log(invalidEmail.match(emailPattern));
//Functions and Arguments
function test(a, b, c) {
console.log("first:", a, arguments[0]);
console.log("second:", b, arguments[1]);
console.log("third:", c, arguments[2]);
}
test("fun", "js", "secrets");
//updation of parameters
function test(a, b, c) {
a = "nice";
arguments[1] = "JavaScript";
console.log("first:", a, arguments[0]);
console.log("second:", b, arguments[1]);
console.log("third:", c, arguments[2]);
}
test("fun", "js", "secrets");
//exercise
// Function using arguments object

function getLastValue() {

    // 2. Blank variable
    let lastOne = "";

    // 1. Loop through arguments object
    for (let i = 0; i < arguments.length; i++) {

        console.log("Argument:", arguments[i]);

        // 3. Store current argument value
        lastOne = arguments[i];
    }

    // 4. Return last argument
    return lastOne;
}

// 5. Call function with multiple arguments
let result = getLastValue(10, 20, 30, 40, 50);

// Display final result
console.log("Last Argument:", result);

//JSON(javascript object notation)
//JSON is a standard used to communicate with APIs
{
"companies" [
{
"name": "JavaScript Code Dojo",
"addresses": [
{
"street": "123 Main street",
"zipcode": 12345,
"city" : "Scott"
},
{
"street": "123 Side street",
"zipcode": 35401,
"city" : "Tuscaloosa"
}
]
},
{
"name": "Python Code Dojo",
"addresses": [
{
"street": "123 Party street",
"zipcode": 68863,
"city" : "Nebraska"
},
{
"street": "123 Monty street",
"zipcode": 33306,
"city" : "Florida"
}
]
}
]
}

//parsing JSON
let str = "{\"name\": \"Maaike\", \"age\": 30}";
let obj = JSON.parse(str);
console.log(obj.name, "is", obj.age);
//Stringify
let dog = {
"name": "wiesje",
"breed": "dachshund"
};
let strdog = JSON.stringify(dog);
console.log(typeof strdog);
console.log(strdog);

//CONCURRENCY
//callbacks
function doSomething(callback) {
callback();
}
function sayHi() {
console.log("Hi!");
}
doSomething(sayHi);

function judge(grade) {
switch (true) {
case grade == "A":
console.log("You got an", grade, ": amazing!");
break;
case grade == "B":
console.log("You got a", grade, ": well done!");
break;
case grade == "C":
console.log("You got a", grade, ": alright.");
break;
case grade == "D":
console.log("You got a", grade, ": hmmm...");
break;
default:
console.log("An", grade, "! What?!");
}
}
function getGrade(score, callback) {
let grade;
switch (true) {
case score >= 90:
grade = "A";
break;
case score >= 80:
console.log(score);
grade = "B";
break;
case score >= 70:
    grade = "C";
break;
case score >= 60:
grade = "D";
break;
default:
grade = "F";
}
callback(grade);
}
getGrade(85, judge);

//promises
let promise = new Promise(function (resolve, reject) {
// do something that might take a while
// let's just set x instead for this example
let x = 20;
if (x > 10) {
resolve(x); // on success
} else {
reject("Too low"); // on error
}
});
promise.then(
function (value) {
console.log("Success:", value);
},
function (error) {
console.log("Error:", error);
}
);

const promise = new Promise((resolve, reject) => {
resolve("success!");
})
.then(value => {
console.log(value);
return "we";
})
.then(value => {
console.log(value);
return "can";
})
.then(value => {
console.log(value);
return "chain";
})
.then(value => {
console.log(value);
return "promises";
})
.then(value => {
console.log(value);
})
.catch(value => {
console.log(value);
})
//async and await
function saySomething(x) {
return new Promise(resolve => {
setTimeout(() => {
resolve("something" + x);
}, 2000);
});
}
async function talk(x) {
const words = await saySomething(x);
console.log(words);
}
talk(2);
talk(4);
talk(8);
// 1. Global counter value
let counter = 0;

// 2. Function returning a Promise
function incrementCounter(value) {

    return new Promise((resolve) => {

        setTimeout(() => {

            // 3. Increment counter every second
            counter++;

            // Resolve promise with counter and value
            resolve(`x value ${value} counter:${counter}`);

        }, 1000);

    });

}

// 4. Async function
async function displayCounter(x) {

    console.log(`ready ${x} counter:${counter}`);

    // 5. Capture resolved value using await
    let result = await incrementCounter(x);

    // Output resolved result
    console.log(result);

}

// 6. Loop running 10 times
for (let i = 1; i <= 10; i++) {

    displayCounter(i);

}
