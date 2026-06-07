/**************************************
 * PROMISES & ASYNC/AWAIT
 **************************************/

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Data fetched successfully");
    } else {
        reject("Something went wrong");
    }
});

// Consuming Promise
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise Finished");
    });

/**************************************
 * PROMISE CHAINING
 **************************************/

Promise.resolve(10)
    .then(num => num * 2)
    .then(num => num + 5)
    .then(result => console.log("Final Result:", result))
    .catch(err => console.log(err));

/**************************************
 * PROMISE.ALL
 **************************************/

const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])
    .then(result => console.log(result));

/**************************************
 * PROMISE.RACE
 **************************************/

const race1 = new Promise(resolve =>
    setTimeout(() => resolve("First"), 1000)
);

const race2 = new Promise(resolve =>
    setTimeout(() => resolve("Second"), 2000)
);

Promise.race([race1, race2])
    .then(result => console.log("Winner:", result));

/**************************************
 * ASYNC / AWAIT
 **************************************/

function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Sumana"
            });
        }, 2000);
    });
}

async function getUser() {
    const user = await fetchUser();
    console.log(user);
}

getUser();

/**************************************
 * ERROR HANDLING
 **************************************/

async function testError() {
    try {
        throw new Error("Server Error");
    } catch (err) {
        console.log(err.message);
    }
}

testError();

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
        console.log(error);
    }
}

getPosts();