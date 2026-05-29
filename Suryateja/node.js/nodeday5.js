// Asynchronous JavaScript - Node.js
// Async Example
console.log("Program Started");
setTimeout(() => {
    console.log("Task Completed");
}, 2000);
console.log("Program Ended");


// Promises
const myPromise = new Promise((resolve, reject) => {
    let isCompleted = true;
    if(isCompleted){
        resolve("Data Loaded Successfully");
    }
    else{
        reject("Failed To Load Data");
    }
});
myPromise
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error);
});


// Async / Await
function fetchUserData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Information");
        }, 1500);
    });
}
async function displayUserData(){
    let data = await fetchUserData();
    console.log(data);
}
displayUserData();


// Error Handling
try{
    JSON.parse("{name:}");
}
catch(error){
    console.log(
        "Caught Error:",
        error.message
    );
}


// Async Error Handling
async function checkServer(){
    try{
        let result = await Promise.reject(
            "Network Error"
        );
        console.log(result);
    }
    catch(error){
        console.log(
            "Handled Error:",
            error
        );
    }
}
checkServer();