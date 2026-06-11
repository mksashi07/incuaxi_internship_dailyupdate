/**************************************
 * ASYNCHRONOUS JAVASCRIPT
 **************************************/

console.log("Start");

// setTimeout
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

/**************************************
 * CALLBACK FUNCTION
 **************************************/

function fetchData(callback) {
    setTimeout(() => {
        callback("Data Received");
    }, 1000);
}

fetchData((data) => {
    console.log(data);
});

/**************************************
 * PROMISE
 **************************************/

const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Promise Resolved");
    } else {
        reject("Promise Rejected");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise Completed"));

/**************************************
 * PROMISE CHAINING
 **************************************/

Promise.resolve(5)
    .then(num => num * 2)
    .then(num => num + 10)
    .then(result => console.log("Final Result:", result));

/**************************************
 * ASYNC / AWAIT
 **************************************/

function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 1, name: "Sumana" });
        }, 2000);
    });
}

async function fetchUser() {
    try {
        const user = await getUser();
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

fetchUser();

/**************************************
 * PROMISE.ALL
 **************************************/

const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])
    .then(result => console.log(result));

/**************************************
 * FETCH API
 **************************************/

async function getPosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getPosts();

/**************************************
 * EVENT LOOP EXAMPLE
 **************************************/

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

// Output:
// 1
// 4
// 3
// 2

/**************************************
 * TRY-CATCH WITH ASYNC/AWAIT
 **************************************/

async function testError() {
    try {
        throw new Error("Something went wrong");
    } catch (err) {
        console.log(err.message);
    }
}

testError();