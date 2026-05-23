
// Asynchronous - Node.js

// Node Async
console.log("Start");

setTimeout(() => {
    console.log("Async Task");
}, 1000);

console.log("End");



// Node Promises

const promise = new Promise((resolve,reject)=>{

    let success = true;

    if(success){
        resolve("Promise Success");
    }else{
        reject("Promise Failed");
    }

});

promise
.then(data => console.log(data))
.catch(err => console.log(err));




// Node Async/Await

function getUser(){

    return new Promise(resolve=>{

        setTimeout(()=>{
            resolve("User Data");
        },1000);

    });

}

async function fetchData(){

    let result = await getUser();

    console.log(result);

}

fetchData();




// Node Error Handling

try{

    JSON.parse("{");

}
catch(error){

    console.log(
        "Error:",
        error.message
    );

}



// Async Error Handling

async function getData(){

try{

let result = await Promise.reject(
    "Server Error"
);

console.log(result);

}
catch(error){

console.log(
"Handled:",
error
);

}

}

getData();