// 1. HELLO PROGRAM
console.log("Hello JavaScript!");
console.log("Welcome to JS Topics Demo");
// 2. LOCAL STORAGE
// Save data
localStorage.setItem("username", "Manju");
localStorage.setItem("course", "JavaScript");

// Get data
const username = localStorage.getItem("username");
const course = localStorage.getItem("course");

console.log("Username:", username);
console.log("Course:", course);

// Remove one item
// localStorage.removeItem("course");

// Clear all local storage
// localStorage.clear();
// 3. CALLBACK FUNCTION

function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

function afterGreeting() {
    console.log("Callback function executed");
}

greet("Manju", afterGreeting);
// 4. PROMISES
const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Promise Success");
    } else {
        reject("Promise Failed");
    }
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
// 5. ASYNC / AWAIT
function fetchData() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);

    });
}
async function getData() {

    console.log("Loading data...");

    const result = await fetchData();

    console.log(result);
}

getData();
// EXTRA COMBINED EXAMPLE
function loginUser(username, callback) {

    setTimeout(() => {

        console.log(username + " logged in");

        callback();

    }, 1000);
}

function startCourse() {
    console.log("JavaScript Course Started");
}

loginUser("Manju", startCourse);
// ASYNC + LOCAL STORAGE
async function saveUser() {

    const userData = await new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Manju"
            });

        }, 1500);

    });

    // Save object in local storage
    localStorage.setItem("user", JSON.stringify(userData));

    console.log("User saved to Local Storage");

    // Retrieve object
    const storedUser = JSON.parse(localStorage.getItem("user"));

    console.log("Stored User:", storedUser);
}
saveUser();