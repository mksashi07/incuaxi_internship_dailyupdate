// ==========================================
// ERROR HANDLING + DOM + EVENTS IN ONE FILE
// ==========================================


// ==========================================
// ELEMENT SELECTORS
// ==========================================

// Select elements
const title = document.getElementById("title");

const button = document.querySelector(".btn");

const input = document.querySelector("#username");

const message = document.querySelector("#message");

const box = document.querySelector("#box");

const list = document.querySelector("#list");


// ==========================================
// CHANGE HTML CONTENT
// ==========================================

title.textContent = "JavaScript Full Example";

message.innerHTML = "<b>Welcome to DOM Manipulation</b>";


// ==========================================
// ADD NEW HTML ELEMENT
// ==========================================

const newItem = document.createElement("li");

newItem.textContent = "React JS";

list.appendChild(newItem);


// ==========================================
// DOM NAVIGATION
// ==========================================

console.log(list.parentElement);

console.log(list.children);

console.log(list.firstElementChild);

console.log(list.lastElementChild);


// ==========================================
// ERROR HANDLING
// ==========================================

button.addEventListener("click", () => {

    try {

        if(input.value.trim() === ""){
            throw "Input cannot be empty!";
        }

        message.innerHTML = `Hello ${input.value}`;

    }

    catch(error){

        message.innerHTML = error;

    }

    finally{

        console.log("Button was clicked");

    }

});


// ==========================================
// MOUSE EVENTS
// ==========================================

box.addEventListener("mouseover", () => {

    box.style.backgroundColor = "red";

});

box.addEventListener("mouseout", () => {

    box.style.backgroundColor = "blue";

});

box.addEventListener("click", () => {

    box.style.width = "200px";

});


// ==========================================
// KEY EVENTS
// ==========================================

input.addEventListener("keydown", (event) => {

    console.log(`Key Down: ${event.key}`);

});

input.addEventListener("keyup", () => {

    console.log(`Current Value: ${input.value}`);

});

input.addEventListener("keypress", (event) => {

    console.log(`Key Pressed: ${event.key}`);

});