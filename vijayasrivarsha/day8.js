// 1. SELECT ELEMENTS
const title = document.getElementById("title");
const para = document.querySelector(".text");
const allParas = document.querySelectorAll(".text");
console.log(title);
console.log(para);
console.log(allParas);
// 2. DOM NAVIGATION
const container = document.getElementById("container");
console.log(container.parentElement);
console.log(container.children);
console.log(container.firstElementChild);
console.log(container.lastElementChild);
// 3. MOUSE EVENTS
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    title.textContent = "Button Clicked!";
});

btn.addEventListener("mouseover", () => {
    btn.style.backgroundColor = "yellow";
});

btn.addEventListener("mouseout", () => {
    btn.style.backgroundColor = "";
});
// 4. KEYBOARD EVENTS
const input = document.getElementById("inputBox");

input.addEventListener("keydown", (e) => {
    console.log("Key:", e.key);
});

input.addEventListener("keyup", () => {
    title.textContent = input.value;
});
// 5. ADD ELEMENT
const newElement = document.createElement("p");
newElement.textContent = "New Element Added";
container.appendChild(newElement);
// 6. CHANGE ELEMENT
para.textContent = "Text Changed!";
para.style.color = "blue";
// 7. EXTRA: CLICK TO CHANGE STYLE
allParas.forEach(p => {
    p.addEventListener("click", () => {
        p.style.backgroundColor = "lightgreen";
    });
});