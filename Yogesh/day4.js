  // Global variable
function showName() {
    name = "Yogesh"; 
    console.log(name);
}
showName();
console.log(name);


// Function scope
function test() {
    let age = 20;   
    console.log(age);
}

test();


//block scope
function hello() {
    let message = "Hello";
    console.log(message);
}
hello();

// Function return

function calculateTotal(price, tax) {
    let total = price + tax;
    return total;
}

let finalAmount = calculateTotal(500, 50);
console.log("Final amount:", finalAmount);

//return with parameters
function multiply(num1, num2) {
    return num1 * num2;
}

let answer = multiply(4, 5);
console.log(answer);

// return without parameters
function getGrade() {
    let marks = 85;

    if (marks >= 90) {
        return "A";
    } else if (marks >= 75) {
        return "B";
    } else {
        return "C";
    }
}

let grade = getGrade();
console.log("Grade:", grade);