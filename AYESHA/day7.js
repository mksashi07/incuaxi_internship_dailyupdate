// JS ERRORS

// JS Errors Intro
console.log("---- JS Errors Intro ----");
try {
    let x = y + 10; // y not defined
} catch(error) {
    console.log("Error caught:", error.message);
}

// JS Errors Silent
console.log("\n---- JS Errors Silent ----");
function divide(a,b){
    if(b===0){
        return null; // silent failure
    }
    return a/b;
}
console.log(divide(10,0));

// JS Error Statements
console.log("\n---- JS Error Statements ----");
try{
    let age = 15;

    if(age < 18){
        throw "Age must be above 18";
    }

}catch(err){
    console.log("Custom Error:",err);
}

// JS Error Object
console.log("\n---- JS Error Object ----");
try{
    JSON.parse("{name:'john'}");
}
catch(err){
    console.log("Name:",err.name);
    console.log("Message:",err.message);
    console.log("Stack:",err.stack);
}

// JS ASYNCHRONOUS
// Async Path (execution flow)
console.log("\n---- Async Path ----");
console.log("Start");
setTimeout(()=>{
    console.log("Async Task");
},1000);
console.log("End");

// Async Intro
console.log("\n---- Async Intro ----");
function task(){
    console.log("Task completed");
}
setTimeout(task,2000);

// Async Timeouts
console.log("\n---- Async Timeouts ----");
setTimeout(()=>{
    console.log("Runs after 3 seconds");
},3000);

// Async Callbacks
console.log("\n---- Async Callbacks ----");
function getData(callback){
    setTimeout(()=>{
        callback("Data received");
    },1000)
}
getData((result)=>{
    console.log(result);
});

// Async Promises
console.log("\n---- Async Promises ----");
let promise = new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("Promise Success");
    }else{
        reject("Promise Failed");
    }
});
promise
.then(data=>console.log(data))
.catch(err=>console.log(err));

// Async Await
console.log("\n---- Async Await ----");
function fetchUser(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("User Data");
        },2000)
    });
}
async function getUser(){
    let result=await fetchUser();
    console.log(result);
}
getUser();

// Async Fetch
console.log("\n---- Async Fetch ----");
async function getPosts(){
try{
let response = await fetch(
"https://jsonplaceholder.typicode.com/posts/1"
);
let data=await response.json();
console.log(data);
}
catch(err){
    console.log(err);
}
}
getPosts();
// Async Debug
console.log("\n---- Async Debug ----");
async function debugExample(){
console.log("Step1");
await new Promise(resolve=>
setTimeout(resolve,1000)
);
console.log("Step2");
}
debugExample();

// Async Reference
console.log("\n---- Async Reference ----");
console.log("setTimeout");
console.log("Callbacks");
console.log("Promises");
console.log("Async/Await");
console.log("Fetch API");

// LOAD EVENTS
console.log("\n---- Load Events ----");
window.onload=function(){
console.log("Page fully loaded")
};

// EVENT EXAMPLES
// Click Event
document.addEventListener("click",()=>{
    console.log("Document clicked");
});
// Mouse Event
document.addEventListener("mousemove",(e)=>{
    console.log("Mouse:",e.clientX,e.clientY);
});
// Keyboard Event
document.addEventListener("keydown",(e)=>{
    console.log("Key:",e.key);
});

// EVENT LISTENER
console.log("\n---- Event Listener ----");
let btn=document.createElement("button");
btn.innerText="Click Me";
document.body.appendChild(btn);
btn.addEventListener("click",()=>{
console.log("Button Clicked");
});
btn.addEventListener("mouseover",()=>{
console.log("Mouse Over Button");
});