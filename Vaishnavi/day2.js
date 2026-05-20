let username = "mounika";
let password = "12345";
let otp = 6789;

if (username === "mounika") {

    console.log("Username is correct");

    if (password === "12345") {

        console.log("Password is correct");

        if (otp === 6789) {

            console.log("OTP verified");
            console.log("Login successful");

        } else {

            console.log("Invalid OTP");

        }

    } else {

        console.log("Wrong password");

    }

} else {

    console.log("Invalid username");

}

//Simple function
function greet() {
  console.log("my name is mounika");
}

greet();
//Function with return value
function multiply(a, b) {
    return a * b;
}
let result = multiply(5, 4);
console.log(result);

//Function with parameters
function greet(name) {
  console.log("Hello " + name);
}

greet("Mounika");

//Arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(5, 4));

//Callback Function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Task Completed");
}

greet("John", done);
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

    console.log("-------------------");
    console.log("Result Generated");
    console.log("Thank You");

}

studentDetails("mounika", 20, "CSE - C", 89);
