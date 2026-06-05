// if
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote");
}


// if else
let number = 7;
if (number % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}


// else if
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}


// Nested if
let userAge = 22;
let hasLicense = true;
if (userAge >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("License required");
    }
} else {
    console.log("You are underage");
}


// switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid Day");
}


// Ternary Operator
let ageCheck = 20;
let result = ageCheck >= 18 ? "Adult" : "Minor";
console.log(result);


// for Loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}


// while Loop
let i = 1;
while (i <= 5) {
    console.log("While Loop:", i);
    i++;
}


// do while Loop
let j = 1;
do {
    console.log("Do While Loop:", j);
    j++;
} while (j <= 5);


// Nested Loops
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log("Row:", row, "Column:", col);
    }
}


// break
for (let k = 1; k <= 10; k++) {
    if (k === 6) {
        break;
    }
    console.log("Break Example:", k);
}


// continue
for (let l = 1; l <= 5; l++) {
    if (l === 3) {
        continue;
    }
    console.log("Continue Example:", l);
}


// for...of
let fruits = ["Apple", "Banana", "Mango"];
for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}


// for...in
let person = {
    name: "Surya",
    age: 22,
    city: "Anantapur"
};
for (let key in person) {
    console.log(key + ":", person[key]);
}