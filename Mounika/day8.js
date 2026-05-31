// SELECT ELEMENTS
let title = document.getElementById("title");
console.log(title);

let texts = document.getElementsByClassName("text");
console.log(texts[0]);

let paras = document.getElementsByTagName("p");
console.log(paras.length);

let firstText = document.querySelector(".text");
console.log(firstText);

let allTexts = document.querySelectorAll(".text");
console.log(allTexts.length);

// CHANGE TEXT
title.textContent = "Hello Neha 👋";

// STYLE CHANGE
title.style.color = "purple";
title.style.fontSize = "40px";

// ATTRIBUTE
title.setAttribute("class", "mainHeading");
console.log(title.getAttribute("class"));

// CREATE ELEMENT
let newPara = document.createElement("p");
newPara.textContent = "This is Neha's new paragraph";
document.body.appendChild(newPara);

// REMOVE ELEMENT
// title.remove();

// CLICK EVENT
function showMessage() {
    alert("Hello Neha Button Clicked");
}

// EVENT LISTENER
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    title.innerHTML = "Welcome Neha 🚀";
    title.style.color = "green";
    title.style.fontSize = "45px";
});

// MOUSE EVENTS
title.addEventListener("mouseover", function () {
    title.style.color = "red";
});

title.addEventListener("mouseout", function () {
    title.style.color = "black";
});

// INPUT EVENTS
let inputBox = document.getElementById("inputBox");

inputBox.addEventListener("keydown", function () {
    console.log("Neha is typing...");
});

inputBox.addEventListener("keyup", function () {
    console.log("Key released");
});

inputBox.addEventListener("focus", function () {
    inputBox.style.backgroundColor = "lightyellow";
});

inputBox.addEventListener("blur", function () {
    inputBox.style.backgroundColor = "white";
});

// CHANGE EVENT
let course = document.getElementById("course");

course.addEventListener("change", function () {
    alert("Neha changed course");
});

// FORM SUBMIT
let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Neha form submitted");
});

// DOUBLE CLICK
let doubleBtn = document.getElementById("doubleBtn");

doubleBtn.addEventListener("dblclick", function () {
    alert("Neha double clicked button");
});

// FINAL COMBINED EXAMPLE
let mainBtn = document.getElementById("btn2");
let heading = document.getElementById("heading");
let input = document.getElementById("input");

mainBtn.addEventListener("click", function () {
    heading.innerHTML = "Hello Neha DOM Success 🎉";
    heading.style.color = "blue";
});

input.addEventListener("focus", function () {
    input.style.backgroundColor = "lightblue";
});

input.addEventListener("blur", function () {
    input.style.backgroundColor = "white";
});

let btn = document.getElementById("btn");
let title = document.getElementById("title");

btn.addEventListener("click", function () {
    title.textContent = "Hello Neha 👋 Welcome!";
});

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
    let para = document.createElement("p");
    para.textContent = "New message from Neha";
    document.body.appendChild(para);
});