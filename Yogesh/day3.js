
//while loop to reverse a number
let num = 1234;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reversed number is " + reverse);


//for loop to calculate factorial
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log("Factorial of " + n + " is " + factorial);


//do-while loop to print numbers from 1 to 5
let count = 1;

do {
    console.log("Attempt number: " + count);
    count++;
} while (count <= 5);