// APIs Intro
console.log("API Intro");
function greet(name){
    return `Hello ${name}`;
}
console.log(greet("Ayesha"));

// API Fetch
console.log("Fetch API");
fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err));

// API Geolocation
console.log("Geolocation API");
navigator.geolocation.getCurrentPosition(
(position)=>{
    console.log("Latitude:",position.coords.latitude);
    console.log("Longitude:",position.coords.longitude);
},
(error)=>{
    console.log(error.message);
}
);

// API Web History
console.log("History API");
console.log(history.length);

// API Web Pointer
console.log("Pointer API");
document.addEventListener("pointermove",(e)=>{
    console.log("X:",e.clientX,"Y:",e.clientY);
});

// API Web Storage
console.log("Web Storage API");
localStorage.setItem("name","Ayesha");
let user=localStorage.getItem("name");
console.log(user);
sessionStorage.setItem("course","JavaScript");
console.log(
sessionStorage.getItem("course")
);

// API Validation
console.log("Validation API");

let email="test@gmail.com";

let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(pattern.test(email)){
    console.log("Valid Email");
}else{
    console.log("Invalid Email");
}

// API Web Worker
console.log("Web Worker API");
if(window.Worker){
let worker = new Worker(
URL.createObjectURL(
new Blob([`
onmessage=function(){
postMessage("Worker Running")
}
`],
{type:"text/javascript"})
)
);
worker.postMessage("");
worker.onmessage=(e)=>{
console.log(e.data);
};
}

// JS Window
console.log("Window Object");
console.log(window.innerWidth);
console.log(window.innerHeight);

// JS Screen
console.log("Screen Object");
console.log(screen.width);
console.log(screen.height);

// JS Location
console.log("Location Object");
console.log(location.href);
console.log(location.hostname);

// location.reload();

// JS History
console.log("History Object");
console.log(history.length);

// JS Navigator
console.log("Navigator Object");
console.log(navigator.userAgent);
console.log(
navigator.language
);

// JS Popup Alert
console.log("Popup Alert");
alert("Hello User");
let result=confirm(
"Do you like JavaScript?"
);
console.log(result);
let name=prompt(
"Enter your name"
);
console.log(name);

// JS Timing
console.log("Timing Functions");
setTimeout(()=>{
console.log(
"Runs after 3 sec"
);
},3000);
let interval=
setInterval(()=>{
console.log(
"Repeating every 2 sec"
);
},2000);
setTimeout(()=>{
clearInterval(interval);
},10000);

// JS Cookies
console.log("Cookies");
document.cookie=
"user=Ayesha";
document.cookie=
"course=JavaScript";
console.log(
document.cookie
);