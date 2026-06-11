//LOGIC STATEMENTS
//1.IF_ELSE STATEMENTS
let rain = true;
if(rain){
console.log("** Taking my umbrella when I need to go outside **");
} else {
console.log("** I can leave my umbrella at home **");
}

//EXERCISE
// Step 1: Create a Boolean variable
let isLoggedIn = true;

// Step 2: Output the value to the console
console.log(isLoggedIn);

// Step 3: Check if the variable is true
if (isLoggedIn) {
    console.log("The user is logged in.");
}

// Step 4: Check if the variable is NOT true
if (!isLoggedIn) {
    console.log("The user is not logged in.");
}

// Step 5: Change the variable to the opposite value
isLoggedIn = false;

console.log(isLoggedIn);

// Check again after changing the value
if (isLoggedIn) {
    console.log("The user is logged in.");
}

if (!isLoggedIn) {
    console.log("The user is not logged in.");
}
//ELSE _IF STATEMENTS
let age = 10;
let cost = 0;
let message;
if (age < 3) {
cost = 0;
message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
cost = 5;
message ="With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
cost = 10;
message ="A regular ticket costs 10 dollars.";
} else {
cost = 7;
message ="A ticket is 7 dollars.";
}
console.log(message);
console.log("Your Total cost "+cost);

//EXERCISE
// Step 1: Ask the user's age
let age = prompt("Enter your age:");

// Step 2: Convert the response to a number
age = Number(age);

// Step 3: Declare a message variable
let message;

// Step 4 & 5 & 6: Check age conditions
if (age >= 21) {
    message = "Welcome! You can enter the venue and purchase alcohol.";
} else if (age >= 19) {
    message = "Welcome! You can enter the venue, but you cannot purchase alcohol.";
} else {
    message = "Sorry, entry is denied.";
}

// Step 7: Output the message to the console
console.log(message);

//CONDITIONAL UNARY OPERATORS
let access = age < 18 ? "denied" : "allowed";
age < 18 ? console.log("denied") : console.log("allowed");
//switch statements
if(activity === "Get up") {
console.log("It is 6:30AM");
} else if(activity === "Breakfast") {
console.log("It is 7:00AM");
} else if(activity === "Drive to work") {
console.log("It is 8:00AM");
} else if(activity === "Lunch") {
console.log("It is 12.00PM");
} else if(activity === "Drive home") {
console.log("It is 5:00PM")
} else if(activity === "Dinner") {
console.log("It is 6:30PM");
}
//switch statements
switch(activity) {
case "Get up":
console.log("It is 6:30AM");
break;
case "Breakfast":
console.log("It is 7:00AM");
break;
case "Drive to work":
console.log("It is 8:00AM");
break;
case "Lunch":
console.log("It is 12:00PM");
break;
case "Drive home":
console.log("It is 5:00PM");
break;
case "Dinner":
console.log("It is 6:30PM");
break;
}
//Exercise
// Dynamic number in the code
let dynamicNumber = 50;

// Ask the user to enter a number
let userNumber = Number(prompt("Enter a number:"));

// Check the number and output the result
if (userNumber > dynamicNumber) {
    console.log("Your number is greater than " + dynamicNumber);
} else if (userNumber === dynamicNumber) {
    console.log("Your number is equal to " + dynamicNumber);
} else {
    console.log("Your number is less than " + dynamicNumber);
}

//LOOPS
//1.WHILE LOOP
let i = 0;
while (i < 10) {
console.log(i);
i++;
}
//2.DO WHILE LOOP
let number;
do {
number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));
//3.FOR LOOP
for (let i = 0; i < 10; i++) {
console.log(i);
}

let arr = [];
for (let i = 0; i < 100; i++) {
arr.push(i);
}

let arr = [];
for (let i = 0; i < 100; i = i + 2) {
arr.push(i);
}
//NESTED LOOPS
let arrOfArrays = [];
for (let i = 0; i < 3; i++){
arrOfArrays.push([]);
for (let j = 0; j < 7; j++) {
arrOfArrays[i].push(j);
}
}
console.log(arrOfArrays);
//BREAK
for (let i = 0; i < 10; i++) {
console.log(i);
if (i === 4) {
break;
}
}
