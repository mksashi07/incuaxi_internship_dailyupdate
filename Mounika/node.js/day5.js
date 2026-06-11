console.log("Neha Program Started");

setTimeout(() => {
    console.log("Neha Task Completed");
}, 2000);

console.log("Neha Program Ended");

const nehaPromise = new Promise((resolve, reject) => {
    let isSuccess = true;

    if (isSuccess) {
        resolve("Neha Data Loaded Successfully");
    } else {
        reject("Neha Failed To Load Data");
    }
});

nehaPromise
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
});

function fetchNehaData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Neha User Information");
        }, 1500);
    });
}

async function displayNehaData() {
    let data = await fetchNehaData();
    console.log(data);
}

displayNehaData();

try {
    JSON.parse("{name:}");
}
catch(error) {
    console.log("Neha Error:", error.message);
}

async function checkNehaServer() {
    try {
        let result = await Promise.reject("Neha Network Error");
        console.log(result);
    }
    catch(error) {
        console.log("Handled Error:", error);
    }
}

checkNehaServer();
