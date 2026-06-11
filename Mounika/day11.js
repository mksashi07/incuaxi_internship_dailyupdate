let name = "Mounika";
let age = 20;

console.log("JavaScript Reference");
console.log(name);
console.log(age);

console.log("\nJavaScript Statements");

let a = 10;
let b = 20;

let sum = a + b;

console.log("Sum =", sum);

if (sum > 20) {
    console.log("Sum is greater than 20");
}

console.log("\nJavaScript Keywords");

var x = 10;
let y = 20;
const z = 30;

if (x < y) {
    console.log("x is smaller than y");
}

for (let i = 1; i <= 3; i++) {
    console.log("Loop:", i);
}

console.log("\nJavaScript Operators");

let num1 = 10;
let num2 = 5;

console.log("Addition =", num1 + num2);
console.log("Subtraction =", num1 - num2);
console.log("Multiplication =", num1 * num2);
console.log("Division =", num1 / num2);
console.log("Modulus =", num1 % num2);

let value = 10;

value += 5;
console.log("After += :", value);

value -= 2;
console.log("After -= :", value);

console.log("num1 == num2 :", num1 == num2);
console.log("num1 != num2 :", num1 != num2);
console.log("num1 < num2 :", num1 < num2);
console.log("num1 > num2 :", num1 > num2);
console.log("num1 <= num2 :", num1 <= num2);
console.log("num1 >= num2 :", num1 >= num2);

let p = true;
let q = false;

console.log("p && q =", p && q);
console.log("p || q =", p || q);
console.log("!p =", !p);

console.log("\nJavaScript Operator Precedence");

let result1 = 10 + 5 * 2;
console.log("10 + 5 * 2 =", result1);

let result2 = (10 + 5) * 2;
console.log("(10 + 5) * 2 =", result2);

let result3 = 20 / 2 + 3;
console.log("20 / 2 + 3 =", result3);

let result4 = 20 / (2 + 3);
console.log("20 / (2 + 3) =", result4);