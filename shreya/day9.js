//DOM
//selecting elements
// Select by ID
let heading = document.getElementById("title");
console.log(heading);
// Select by class
let paragraph = document.getElementsByClassName("text");
console.log(paragraph);
// Select by tag
let tags = document.getElementsByTagName("p");
console.log(tags);
// Query Selector
let element = document.querySelector("#title");
console.log(element);
// Query Selector All
let allElements = document.querySelectorAll(".text");
console.log(allElements);
//changing content
let para = document.getElementById("demo");
// Change text
para.innerText = "New Text";
// Change HTML
para.innerHTML = "<b>Bold Text</b>";
//creating elements
// Create element
let newElement = document.createElement("h2");
// Add text
newElement.innerText = "New Heading";
// Add to body
document.body.appendChild(newElement);
//removing elements
let item = document.getElementById("removeMe");
item.remove();
//event hanling
let button = document.getElementById("btn");
button.addEventListener("click", function () {
    alert("Button Clicked");
});
//changing attributes
let img = document.getElementById("image");
img.src = "new.jpg";
img.alt = "New Image";
let btn = document.getElementById("show");
btn.addEventListener("click", function () {
    let user = document.getElementById("username").value;
    console.log(user);
});
//class manipulation
let txt = document.getElementById("text");
// Add class
txt.classList.add("red");
// Remove class
txt.classList.remove("red");
// Toggle class
txt.classList.toggle("red");
//traversing DOM
let txt = document.getElementById("text");
// Add class
txt.classList.add("red");
// Remove class
txt.classList.remove("red");
// Toggle class
txt.classList.toggle("red");
// ASYNCHRONOUS 
console.log("Start");
setTimeout(() => {
    console.log("Async Task Executed");
}, 2000);
console.log("End");
setTimeout(() => {
    console.log("Executed After 3 Seconds");
}, 3000);
let count = 1;
let interval = setInterval(() => {
    console.log("Counter:", count);
    count++;
    if (count > 5) {
        clearInterval(interval);
        console.log("Interval Stopped");
    }
}, 1000);
function greetUser(name, callback) {
    console.log("Hello " + name);
    callback();
}
function afterGreeting() {
    console.log("Greeting Completed");
}
greetUser("Shreya", afterGreeting);
function downloadFile(callback) {
    console.log("Downloading File...");
    setTimeout(() => {
        console.log("Download Completed");
        callback();
    }, 2000);
}
downloadFile(() => {
    console.log("Processing Downloaded File");
});
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise Resolved Successfully");
    } else {
        reject("Promise Rejected");
    }
});
promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Received From Server");
        }, 2000);
    });
}
fetchData()
    .then(data => {
        console.log(data);
    });
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 Completed");
        }, 1000);
    });
}
function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 Completed");
        }, 2000);
    });
}
Promise.all([task1(), task2()])
    .then(results => {
        console.log(results);
    });
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Shreya",
                age: 21
            });
        }, 2000);
    });
}
async function displayUser() {
    console.log("Loading User Data");
    let user = await getUserData();
    console.log(user);
}
displayUser();
function loginSystem() {
    return new Promise((resolve, reject) => {
        let loginSuccess = true;
        if (loginSuccess) {
            resolve("Login Successful");
        } else {
            reject("Login Failed");
        }
    });
}
async function checkLogin() {
    try {
        let result = await loginSystem();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
checkLogin();
async function getPosts() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        let data = await response.json();
        console.log("Posts Data:");
        console.log(data.slice(0, 3));
    } catch (error) {
        console.log("Fetch Error:", error);
    }
}
getPosts();
async function getSingleUser() {
    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        let user = await response.json();
        console.log("User Name:", user.name);
        console.log("User Email:", user.email);
    } catch (error) {
        console.log(error);
    }
}
getSingleUser();
let rejectedPromise = new Promise((resolve, reject) => {
    reject("Something Went Wrong");
});
rejectedPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("Caught Error:", error);
    });
async function returnValue() {
    return "Async Function Returned Value";
}
returnValue()
    .then(result => {
        console.log(result);
    });
function asyncTask(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name + " Finished");
        }, delay);
    });
}
async function runTasks() {
    let result1 = await asyncTask("Task 1", 1000);
    console.log(result1);
    let result2 = await asyncTask("Task 2", 2000);
    console.log(result2);
    let result3 = await asyncTask("Task 3", 3000);
    console.log(result3);
}
runTasks();
function orderFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food Ordered");
        }, 2000);
    });
}
function prepareFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food Prepared");
        }, 3000);
    });
}
function deliverFood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food Delivered");
        }, 2000);
    });
}
async function foodSystem() {
    console.log("Customer Placed Order");
    let order = await orderFood();
    console.log(order);
    let prepare = await prepareFood();
    console.log(prepare);
    let delivery = await deliverFood();
    console.log(delivery);
    console.log("Customer Received Food");
}
foodSystem();
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
function stepOne() {
    return Promise.resolve("Step One Completed");
}
function stepTwo() {
    return Promise.resolve("Step Two Completed");
}
function stepThree() {
    return Promise.resolve("Step Three Completed");
}
stepOne()
    .then(result => {
        console.log(result);
        return stepTwo();
    })
    .then(result => {
        console.log(result);
        return stepThree();
    })
    .then(result => {
        console.log(result);
    });
function fetchProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                product: "Laptop",
                price: 50000,
                stock: true
            });
        }, 2000);
    });
}
async function displayProduct() {
    try {
        console.log("Loading Product...");
        let product = await fetchProduct();
        console.log("Product ID:", product.id);
        console.log("Product Name:", product.product);
        console.log("Price:", product.price);
        console.log("In Stock:", product.stock);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Program Finished");
    }
}
displayProduct();
