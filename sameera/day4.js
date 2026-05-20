// JavaScript Program using Math Objects

console.log("Math Object Examples in JavaScript");

// Random number
let randomNum = Math.random();
console.log("Random Number:", randomNum);

// Power
let powerValue = Math.pow(2, 5);
console.log("2 power 5 =", powerValue);

// Square Root
let sqrtValue = Math.sqrt(81);
console.log("Square Root of 81 =", sqrtValue);

// Absolute Value
let absValue = Math.abs(-45);
console.log("Absolute Value of -45 =", absValue);

// Maximum and Minimum
let maxValue = Math.max(10, 25, 7, 99, 54);
let minValue = Math.min(10, 25, 7, 99, 54);

console.log("Maximum Value =", maxValue);
console.log("Minimum Value =", minValue);

// Rounding Numbers
let number = 7.68;

console.log("Original Number =", number);
console.log("Rounded Value =", Math.round(number));
console.log("Floor Value =", Math.floor(number));
console.log("Ceil Value =", Math.ceil(number));

// Trigonometric Functions
let angle = 0;

console.log("Sin Value =", Math.sin(angle));
console.log("Cos Value =", Math.cos(angle));

// PI Value
console.log("Value of PI =", Math.PI);

//data type  conversions
let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr)

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr = "";
strToNr = Number(strToNr);
console.log("empty string", strToNr, typeof strToNr);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool = "";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

//substraction
let nr1 = 20;
let nr2 = 4;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 - nr2;
let result2 = str1 - nr3;
console.log(result1, result2);

//multiplication
let nr1 = 15;
let nr2 = 10;
let str1 = "Hi";
let nr3 = 3;
let result1 = nr1 * nr2;
let result2 = str1 * nr3;
console.log(result1, result2);

//unary opertors
let nr1 = 4;
nr1++;
console.log(nr1);

let nr2 = 4;
nr2--;
console.log(nr2);

//prefix and postfix operators

let nr = 2;
console.log(nr++);
console.log(nr);

let nr = 2;
console.log(++nr);
//combining these prefix and postfix operators
let nr1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr1++ + ++nr2 * nr3++);

//pythagorus theorem
// Values of the two sides
let a = 3;
let b = 4;

// Calculate hypotenuse using Pythagorean theorem
let c = Math.sqrt(a * a + b * b);

// Display the result
console.log("The hypotenuse is:", c);

//assignment operators
let a = 10;
let b = 5;
let c = 3;

a += b;
a /= c;
c %= b;

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);
//comparison operators
//equal
let x = 5;
let y = "5";
console.log(x == y);
console.log(x===y);
//not equal
let x = 5;
let y = "5";
console.log(x != y);
console.log(x !== y);

//logical operators
//AND
let x = 1;
let y = 2;
let z = 3;
console.log(x < y && y < z);
console.log(x > y && y < z);
//OR
console.log(x > y || y < z);
console.log(x > y || y > z);
//conversion of units
// Distance in miles
let miles = 10;

// Convert miles to kilometers
let kilometers = miles * 1.60934;

// Display the result
console.log(miles + " miles is equal to " + kilometers + " kilometers");

