// Asynchronous JavaScript - Node.js

// 1. Async Example
console.log("Application Started");

setTimeout(() => {
    console.log("Data Received From Server");
}, 3000);

console.log("Application Running");


// 2. Promises
const orderPromise = new Promise((resolve, reject) => {
    let orderPlaced = true;

    if (orderPlaced) {
        resolve("Order Confirmed");
    } else {
        reject("Order Failed");
    }
});

orderPromise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});


// 3. Async / Await
function getProductDetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Product Details Loaded");
        }, 2000);
    });
}

async function showProductDetails() {
    let product = await getProductDetails();
    console.log(product);
}

showProductDetails();


// 4. Error Handling
try {
    let user = JSON.parse("{id:}");
}
catch (error) {
    console.log(
        "Error Found:",
        error.message
    );
}


// 5. Async Error Handling
async function checkDatabaseConnection() {
    try {
        let response = await Promise.reject(
            "Database Connection Failed"
        );

        console.log(response);
    }
    catch (error) {
        console.log(
            "Handled Async Error:",
            error
        );
    }
}

checkDatabaseConnection();