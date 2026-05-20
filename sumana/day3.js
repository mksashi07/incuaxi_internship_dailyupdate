// JAVASCRIPT FUNCTIONS
// 1. BASIC FUNCTION
function greet() {
    console.log("Hello, World!");
}

// 2. FUNCTION WITH PARAMETERS
function add(a, b) {
    console.log(a + b);
}

add(10, 20);
// 3. FUNCTION WITH RETURN VALUE
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);
// 4. LOCAL VARIABLE

function localExample() {

    let message = "I am Local Variable";

    console.log(message);
}

localExample();
// 5. GLOBAL VARIABLE
let userName = "Sumana";

function globalExample() {

    console.log(userName);
}

globalExample();

// 6. VARIABLE SHADOWING
let name = "Global Name";

function shadowExample() {

    let name = "Local Name";

    console.log(name);
}

shadowExample();

console.log(name);
// 7. DEFAULT PARAMETERS
function welcome(name = "Guest") {

    console.log("Welcome " + name);
}

welcome();

welcome("Sumana");
// 8. FUNCTION EXPRESSION
const square = function(number) {

    return number * number;
};

console.log(square(4));

// 9. ANONYMOUS FUNCTION
const hello = function() {

    console.log("Anonymous Function");
};

hello();
// 10. ARROW FUNCTION
const sum = (a, b) => a + b;

console.log(sum(5, 3));

// 11. SINGLE PARAMETER ARROW FUNCTION

const double = n => n * 2;

//loops
// 1. break STATEMENT
console.log("BREAK STATEMENT");

for(let i = 1; i <= 10; i++) {

    if(i == 5) {
        break;
    }

    console.log(i);
}

// 2. continue STATEMENT
console.log("CONTINUE STATEMENT");

for(let i = 1; i <= 5; i++) {

    if(i == 3) {
        continue;
    }

    console.log(i);
}
// 4. do...while LOOP
console.log("DO WHILE LOOP");

let j = 1;

do {

    console.log(j);

    j++;

} while(j <= 5);
// 6. for...in LOOP
console.log("FOR IN LOOP");

const student = {

    name: "Sumana",
    age: 20,
    course: "B.Tech"
};

for(let key in student) {

    console.log(key);              // keys

    console.log(student[key]);     // values
}
// 7. for...of LOOP
console.log("FOR OF LOOP");

const numbers = [10, 20, 30, 40];

for(let value of numbers) {

    console.log(value);
}

// 8. NESTED LOOP
console.log("NESTED LOOP");

for(let row = 1; row <= 3; row++) {

    for(let col = 1; col <= 3; col++) {

        console.log(row, col);
    }
}

// 9. LABEL WITH break
console.log("LABEL WITH BREAK");

outer:

for(let a = 1; a <= 3; a++) {

    for(let b = 1; b <= 3; b++) {

        if(a == 2 && b == 2) {

            break outer;
        }

        console.log(a, b);
    }
}

// 10. LABEL WITH continue
console.log("LABEL WITH CONTINUE");

outerLoop:

for(let x = 1; x <= 3; x++) {

    for(let y = 1; y <= 3; y++) {

        if(y == 2) {

            continue outerLoop;
        }

        console.log(x, y);
    }
}
// 11. EVEN NUMBERS USING for LOOP
console.log("EVEN NUMBERS");

for(let n = 2; n <= 10; n += 2) {

    console.log(n);
}

// 12. ODD NUMBERS USING continue
console.log("ODD NUMBERS");

for(let num = 1; num <= 10; num++) {

    if(num % 2 == 0) {

        continue;
    }

    console.log(num);
}

// 14. ARRAY USING for...of
console.log("ARRAY VALUES");

const fruits = ["Apple", "Mango", "Banana"];

for(let fruit of fruits) {

    console.log(fruit);
}

// 15. OBJECT USING for...in
console.log("OBJECT DETAILS");

const employee = {

    id: 101,
    name: "Sumana",
    role: "Intern"
};

for(let detail in employee) {

    console.log(detail + " : " + employee[detail]);
}