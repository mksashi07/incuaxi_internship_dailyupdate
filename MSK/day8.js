// Function that returns a Promise
function fetchData() {
    return new Promise((resolve, reject) => {

        console.log("Fetching data...");

        // Simulate server delay
        setTimeout(() => {
            resolve("Data received successfully!");
        }, 3000);

    });
}

// Async function
async function getData() {

    console.log("Start");

    // Wait for the promise to complete
    const result = await fetchData();

    console.log(result);

    console.log("End");
}

// Call the function
getData();