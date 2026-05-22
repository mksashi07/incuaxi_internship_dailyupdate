function Pavithra() {
    console.log("Hello pavithra");
}
Mounika();
//parameters
function sub(a, b) {
    return a - b;
}
console.log(sub(10, 5));
//return value
function square(num) {
    return num * num;
}
let result = square(4);
console.log(result);
//normal function
function display() {
    console.log("Normal Function");
}
display();
//arrow function
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(3, 4));
//nested if
let years = 20;
let hasLicense = true;
if(years >= 18) {
    if(hasLicense) {
        console.log("Eligible to drive");
    }
}
//nested if with else
let username = "admin";
let password = "1234";
if(username === "admin") {
    if(password === "1234") {
        console.log("Login Successful");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid Username");
}
//student marks
let marks = 82;
if(marks >= 35) {
    if(marks >= 75) {
        console.log("Distinction");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Fail");
}
//functions using nested if
function checkLogin(username, password) {
    if(username === "pavi") {
        if(password === "12345") {
            console.log("Login Success");
        } else {
            console.log("Incorrect Password");
        }
    } else {
        console.log("Username Not Found");
    }
}
checkLogin("pavi", "12345");

//Student details Function
function studentDetails(name, age, course, marks) {

    console.log("Student Information");
    console.log("-------------------");

    console.log("Name : " + name);
    console.log("Age : " + age);
    console.log("Course : " + course);
    console.log("Marks : " + marks);

    if (marks >= 90) {
        console.log("Grade : A+");
    }

    else if (marks >= 75) {
        console.log("Grade : A");
    }

    else if (marks >= 50) {
        console.log("Grade : B");
    }

    else {
        console.log("Grade : Fail");
    }
    console.log("Result Generated");
    console.log("Thank You");
}
studentDetails("pavithra", 20, "CSE - C", 89);

