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

