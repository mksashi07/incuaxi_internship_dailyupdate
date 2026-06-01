
// 1. CALLBACK STYLE

function getUserCallback(id, callback) {
    setTimeout(() => {
        if (!id) {
            return callback(new Error("User ID is required"));
        }

        callback(null, {
            id,
            name: "John"
        });
    }, 1000);
}

getUserCallback(1, (err, user) => {
    if (err) {
        console.error("Callback Error:", err.message);
        return;
    }

    console.log("Callback User:", user);
});

// 2. PROMISE STYLE
function getUserPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!id) {
                reject(new Error("User ID is required"));
            } else {
                resolve({
                    id,
                    name: "John"
                });
            }
        }, 1000);
    });
}

getUserPromise(2)
    .then(user => {
        console.log("Promise User:", user);
    })
    .catch(err => {
        console.error("Promise Error:", err.message);
    });

// 3. PROMISE CHAINING
function getOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 101, product: "Laptop" },
                { id: 102, product: "Mobile" }
            ]);
        }, 1000);
    });
}

getUserPromise(3)
    .then(user => {
        console.log("User:", user);

        return getOrders(user.id);
    })
    .then(orders => {
        console.log("Orders:", orders);
    })
    .catch(err => {
        console.error("Chain Error:", err.message);
    });

// 4. ASYNC FUNCTION
async function hello() {
    return "Hello Async Function";
}

hello()
    .then(result => {
        console.log(result);
    });

// 5. ASYNC/AWAIT
async function getUserData() {
    try {
        const user = await getUserPromise(4);

        console.log("Async/Await User:", user);

    } catch (err) {
        console.error("Async Error:", err.message);
    }
}

getUserData();

// 6. MULTIPLE AWAITS
async function getUserAndOrders() {
    try {
        const user = await getUserPromise(5);

        const orders = await getOrders(user.id);

        console.log("User:", user);
        console.log("Orders:", orders);

    } catch (err) {
        console.error(err.message);
    }
}

getUserAndOrders();
// 7. PARALLEL EXECUTION

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(["Laptop", "Phone", "Tablet"]);
        }, 1500);
    });
}

async function parallelCalls() {
    try {
        const [user, orders, products] =
            await Promise.all([
                getUserPromise(6),
                getOrders(6),
                getProducts()
            ]);

        console.log("Parallel User:", user);
        console.log("Parallel Orders:", orders);
        console.log("Parallel Products:", products);

    } catch (err) {
        console.error("Parallel Error:", err.message);
    }
}

parallelCalls();

// 8. Promise.allSettled

async function settledExample() {
    const result = await Promise.allSettled([
        getUserPromise(7),
        getUserPromise(null),
        getProducts()
    ]);

    console.log("All Settled:", result);
}

settledExample();

// 9. CUSTOM ERROR

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

async function registerUser(user) {
    if (!user.email) {
        throw new ValidationError(
            "Email is mandatory"
        );
    }

    return "User Registered";
}

async function registrationDemo() {
    try {
        const result = await registerUser({});

        console.log(result);

    } catch (err) {

        if (err instanceof ValidationError) {
            console.error(
                "Validation Error:",
                err.message
            );
        } else {
            console.error(
                "Unknown Error:",
                err.message
            );
        }
    }
}

registrationDemo();

// 10. THROW INSIDE ASYNC FUNCTION

async function testError() {
    throw new Error("Something went wrong");
}

testError()
    .catch(err => {
        console.error(
            "Caught Async Error:",
            err.message
        );
    });


// 11. GLOBAL ERROR HANDLERS

process.on(
    "unhandledRejection",
    (reason) => {
        console.error(
            "Unhandled Rejection:",
            reason.message
        );
    }
);

process.on(
    "uncaughtException",
    (err) => {
        console.error(
            "Uncaught Exception:",
            err.message
        );

        process.exit(1);
    }
);


// 12. CALLBACK → PROMISE → ASYNC/AWAIT

// Callback Version
function fetchDataCallback(callback) {
    setTimeout(() => {
        callback(null, "Data Loaded");
    }, 1000);
}

// Promise Version
function fetchDataPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 1000);
    });
}

// Async/Await Version
async function fetchDataAsync() {
    try {
        const data =
            await fetchDataPromise();

        console.log(data);

    } catch (err) {
        console.error(err.message);
    }
}

fetchDataAsync();