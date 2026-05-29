// JERROR HANDLING
// 1. Basic try-catch
try {
    console.log("1. Basic Try-Catch");
    // Error: variable not defined
    console.log(userName);
}
catch(error) {
    console.log("Error Name:", error.name);
    console.log("Error Message:", error.message);
}
// 2. finally block
try {

    console.log("2. Finally Example");
}
catch(error) {
    console.log(error.message);
}
finally {
    console.log("Finally block always executes");
}
// 3. throw custom error
try {
    console.log("3. Throw Custom Error");
    let age = 15;
    if(age < 18) {
        throw new Error("Age must be 18 or above");
    }
    console.log("Access Granted");
}
catch(error) {
    console.log(error.message);
}
// 4. Division example
function divide(a, b) {
    try {
        if(b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
    catch(error) {
        return error.message;
    }
}
console.log("4. Division Example");
console.log(divide(10, 2));
console.log(divide(10, 0));
// 5. JSON Error Handling
try {
    console.log("5. JSON Error Handling");
    let data = '{"name":"Vishnu"}';
    let user = JSON.parse(data);
    console.log(user.name);
}
catch(error) {
    console.log("Invalid JSON");
}
// 6. Password Validation
function login(password) {
    try {
        if(password.length < 6) {
            throw new Error("Password too short");
        }
        console.log("Login Successful");
    }
    catch(error) {
        console.log(error.message);
    }
}
console.log("6. Password Validation");
login("123");
login("abcdef");
// 7. Nested Try-Catch
try {
    console.log("7. Nested Try-Catch");
    try {
        console.log(test);
    }
    catch(error) {
        console.log("Inner Catch:", error.message);
    }
}
catch(error) {
    console.log("Outer Catch");
}
// 8. Async/Await Error Handling
async function getData() {
    try {

        console.log("8. Async/Await Example");

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        let data = await response.json();
        console.log(data);
    }
    catch(error) {
        console.log("Fetch Error:", error.message);
    }
}
getData();
// 9. Promise Error Handling
function fetchData() {
    return new Promise((resolve, reject) => {
        let success = false;
        if(success) {
            resolve("Data Received");
        }
        else {
            reject("Server Error");
        }
    });
}
console.log("9. Promise Error Handling");
fetchData()
.then(data => console.log(data))
.catch(error => console.log(error));
// 10. Real-Time Banking Example
function withdraw(balance, amount) {
    try {
        console.log("10. Banking Example");
        if(amount > balance) {
            throw new Error("Insufficient Balance");
        }
        balance -= amount;
        console.log("Remaining Balance:", balance);
    }
    catch(error) {
        console.log(error.message);
    }
    finally {
        console.log("Transaction Completed");
    }
}
withdraw(5000, 7000);
// 11. Different Error Types
try {
    console.log("11. Different Error Types");
    // Syntax-like example
    let num = null;
    console.log(num.toUpperCase());
}
catch(error) {
    console.log("Error Type:", error.name);
    console.log("Message:", error.message);
}

console.log("Program Finished Successfully");