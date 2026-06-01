//DOM Navigations

//firstElementChild

const parentElement = document.querySelectorAll("ul");

parentElement.forEach((ulElement) => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "blue";
});


//lastElementChild
const parentElement = document.querySelectorAll("ul");

parentElement.forEach((ulElement) => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "red";
});


//nextElementSibling

const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";


previousElementSibling

const element = document.getElementById("cherry");
const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "palegreen";


// parentElement

const element = document.getElementById("banana");
const parent = element.parentElement;
parent.style.backgroundColor = "lightgray";


//children

const element = document.getElementById("desserts");
const children = element.children;

Array.from(children).forEach((child) => {
    child.style.backgroundColor = "lightblue";
});


//children with index

const element = document.getElementById("desserts");
const children = element.children;

Array.from(children).forEach((child) => {
    children[1].style.backgroundColor = "lightblue";
});
