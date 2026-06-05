// JAVASCRIPT EVENTS - COMPLETE PRACTICE
// 1. BASIC CLICK EVENT
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  console.log("Button Clicked!");
});
// 2. EVENT OBJECT
button.addEventListener("click", (e) => {
  console.log("Event Type:", e.type);
  console.log("Target Element:", e.target);
});

// 3. INPUT EVENT
const input = document.querySelector("#name");

input.addEventListener("input", (e) => {
  console.log("Input Value:", e.target.value);
});
// 4. KEYBOARD EVENT
document.addEventListener("keydown", (e) => {
  console.log("Key Pressed:", e.key);
});

// 5. FORM SUBMIT EVENT
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Form Submitted");
});

// 6. WINDOW SCROLL EVENT
window.addEventListener("scroll", () => {
  console.log("Scroll Position:", scrollY);
});

// 7. MOUSE EVENTS
const box = document.querySelector("#box");

box.addEventListener("mouseenter", () => {
  console.log("Mouse Entered Box");
});

box.addEventListener("mouseleave", () => {
  console.log("Mouse Left Box");
});

// 8. EVENT BUBBLING
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
  console.log("Parent Clicked");
});

child.addEventListener("click", () => {
  console.log("Child Clicked");
});
// 9. stopPropagation()
child.addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("Propagation Stopped");
});

// 10. EVENT DELEGATION
const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
  console.log("Clicked Item:", e.target.textContent);
});

// 11. removeEventListener()
function greet() {
  console.log("Hello User");
}

button.addEventListener("click", greet);

button.removeEventListener("click", greet);

// 12. DOMContentLoaded EVENT
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Fully Loaded");
});

