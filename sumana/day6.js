// JAVASCRIPT DOM 
// 1. SELECTING ELEMENTS

// getElementById
let heading = document.getElementById("title");
console.log(heading);

// getElementsByClassName
let items = document.getElementsByClassName("item");
console.log(items);

// getElementsByTagName
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// querySelector
let firstElement = document.querySelector(".box");
console.log(firstElement);

// querySelectorAll
let allElements = document.querySelectorAll(".box");
console.log(allElements);

// 2. CHANGING CONTENT

let text = document.getElementById("text");

// innerHTML
text.innerHTML = "<h2>Hello DOM</h2>";

// innerText
text.innerText = "JavaScript DOM";

// textContent
text.textContent = "DOM Manipulation";

// 3. CHANGING STYLES

let styleBox = document.getElementById("styleBox");

styleBox.style.color = "white";
styleBox.style.backgroundColor = "blue";
styleBox.style.padding = "20px";
styleBox.style.fontSize = "25px";

// 4. WORKING WITH ATTRIBUTES

let image = document.getElementById("image");

// setAttribute
image.setAttribute("src", "image.jpg");

// getAttribute
console.log(image.getAttribute("src"));

// removeAttribute
image.removeAttribute("alt");

// 5. CREATING ELEMENTS

// createElement
let newHeading = document.createElement("h1");

newHeading.innerText = "New Element Created";

// appendChild
document.body.appendChild(newHeading);

// 6. APPEND AND PREPEND

let container = document.getElementById("container");

let para1 = document.createElement("p");
para1.innerText = "Appended Paragraph";

container.append(para1);

let para2 = document.createElement("p");
para2.innerText = "Prepended Paragraph";

container.prepend(para2);

// 7. REMOVE ELEMENT

let removeItem = document.getElementById("removeBox");

removeItem.remove();

// 8. DOM TRAVERSAL
let child = document.getElementById("child");

// parentElement
console.log(child.parentElement);

// children
console.log(child.children);

// firstElementChild
console.log(child.firstElementChild);

// lastElementChild
console.log(child.lastElementChild);

// nextElementSibling
console.log(child.nextElementSibling);

// previousElementSibling
console.log(child.previousElementSibling);

// 9. EVENT HANDLING

let button = document.getElementById("btn");

button.addEventListener("click", function () {
    alert("Button Clicked");
});

// 10. MOUSE EVENTS

let hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "yellow";
});

hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "white";
});

// 11. KEYBOARD EVENTS

let input = document.getElementById("inputBox");

input.addEventListener("keydown", function (event) {
    console.log("Key Pressed:", event.key);
});

// 12. FORM HANDLING

let formButton = document.getElementById("submitBtn");

formButton.addEventListener("click", function () {

    let username = document.getElementById("username").value;

    console.log("Username:", username);
});

// 13. classList METHODS

let card = document.getElementById("card");

// add class
card.classList.add("active");

// remove class
card.classList.remove("active");

// toggle class
card.classList.toggle("dark");

// contains
console.log(card.classList.contains("dark"));

// 14. setTimeout

setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);

// 15. setInterval

let intervalId = setInterval(function () {
    console.log("Running every 1 second");
}, 1000);

// clearInterval
clearInterval(intervalId);

// 16. EVENT BUBBLING

let parent = document.getElementById("parent");
let childButton = document.getElementById("childButton");

parent.addEventListener("click", function () {
    console.log("Parent Clicked");
});

childButton.addEventListener("click", function (event) {

    console.log("Child Clicked");

    // stopPropagation
    event.stopPropagation();
});

// 17. EVENT DELEGATION

let list = document.getElementById("list");

list.addEventListener("click", function (event) {

    console.log(event.target.innerText);
});

// 18. localStorage

// setItem
localStorage.setItem("name", "Sumana");

// getItem
console.log(localStorage.getItem("name"));

// removeItem
localStorage.removeItem("name");

// clear
localStorage.clear();

// 19. sessionStorage

// setItem
sessionStorage.setItem("user", "admin");

// getItem
console.log(sessionStorage.getItem("user"));

// 20. MINI PROJECT - COUNTER APP

let count = 0;

let countValue = document.getElementById("count");

let increaseBtn = document.getElementById("increase");

let decreaseBtn = document.getElementById("decrease");

// Increase
increaseBtn.addEventListener("click", function () {

    count++;

    countValue.innerText = count;
});

// Decrease
decreaseBtn.addEventListener("click", function () {

    count--;

    countValue.innerText = count;
});

// 21. CHANGE BACKGROUND COLOR

let colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {

    document.body.style.backgroundColor = "lightblue";
});

// 22. DIGITAL CLOCK

setInterval(function () {

    let date = new Date();

    let clock = document.getElementById("clock");

    clock.innerText = date.toLocaleTimeString();

}, 1000);

// 23. ADD LIST ITEMS DYNAMICALLY

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {

    let inputValue = document.getElementById("listInput").value;

    let li = document.createElement("li");

    li.innerText = inputValue;

    document.getElementById("dynamicList").appendChild(li);
});

// 24. DOM LOADED EVENT

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM Fully Loaded");
});

// 25. WINDOW OBJECT METHODS

// alert
alert("Welcome to DOM Practice");

// prompt
let userName = prompt("Enter your name");
console.log(userName);

// confirm
let result = confirm("Are you sure?");
console.log(result);
