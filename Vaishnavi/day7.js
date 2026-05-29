//DOM  Manipulation - Document Object Model
//DOM Selection Methods
//1. getElementById() - Selects an element using its id
let heading = document.getElementById("title");
console.log(heading);

//2. getElementsByClassName()
//Definition - Selects all elements with the same class name
let paragraphs = document.getElementsByClassName("text");
console.log(paragraphs[0]);

//3. getElementsByTagName()
//Definition - Selects elements using tag names.
let para = document.getElementsByTagName("p");
console.log(para.length);

//4. querySelector()
//Definition - Selects the first matching element.
let element = document.querySelector(".text");
console.log(element);

//5. querySelectorAll() - Selects all matching elements.
let elements = document.querySelectorAll(".text");
console.log(elements.length);

//textContent -Changes only text content.
document.getElementById("title").textContent = "New Heading";

//Changing CSS Styles
//style Property -Changes CSS styles using JavaScript.
let heading = document.getElementById("title");

heading.style.color = "blue";
heading.style.fontSize = "40px";

//setAttribute() - Adds or changes attributes.
let heading = document.getElementById("title");

heading.setAttribute("class", "mainHeading");

//getAttribute() - Gets attribute value.
console.log(heading.getAttribute("id"));

//createElement() - Creates a new HTML element.
let newPara = document.createElement("p");

newPara.textContent = "This is a new paragraph";

document.body.appendChild(newPara);

//remove() - Removes an element from webpage.
let element = document.getElementById("title");

element.remove();

//onclick Event - Executes code when user clicks.
function showMessage() {
    alert("Button Clicked");
}

//addEventListener() - Attaches an event to an element.
let button = document.getElementById("btn");

button.addEventListener("click", function() {
    alert("Event Listener Working");
});

//DOM Example
let heading = document.getElementById("heading");

let button = document.getElementById("btn");

button.addEventListener("click", function() {

    heading.innerHTML = "DOM Manipulation Success";

    heading.style.color = "green";

    heading.style.fontSize = "50px";

});

//Event Listener
//1. Click Event
let button = document.getElementById("btn");

button.addEventListener("click", function() {
    alert("Button Clicked");
});

//2. Mouseover Event - Occurs when mouse enters an element.
let heading = document.getElementById("heading");

heading.addEventListener("mouseover", function() {
    heading.style.color = "red";
});

//Mouseout Event - Occurs when mouse leaves the element.
heading.addEventListener("mouseout", function() {
    heading.style.color = "black";
});

//Keydown Event - Occurs when keyboard key is pressed.
let input = document.getElementById("inputBox");

input.addEventListener("keydown", function() {
    console.log("Key Pressed");
});

//Keyup Event 
input.addEventListener("keyup", function() {
    console.log("Key Released");
});

//Change Event - Occurs when input value changes.
let course = document.getElementById("course");

course.addEventListener("change", function() {
    alert("Course Changed");
});

//Submit Event - Occurs when form is submitted.
let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Form Submitted");

});

//Double Click Event - Occurs when user double-clicks.
let btn = document.getElementById("doubleBtn");

btn.addEventListener("dblclick", function() {
    alert("Double Clicked");
});

//Focus Event - Occurs when input field gets focus.
let nameBox = document.getElementById("name");

nameBox.addEventListener("focus", function() {
    nameBox.style.backgroundColor = "yellow";
});

//Blur Event - Occurs when input loses focus.
nameBox.addEventListener("blur", function() {
    nameBox.style.backgroundColor = "white";
});

// Complete example on Events
let button = document.getElementById("btn");

let title = document.getElementById("title");

let input = document.getElementById("input");

button.addEventListener("click", function() {

    title.innerHTML = "Button Clicked";

    title.style.color = "green";

});

input.addEventListener("focus", function() {

    input.style.backgroundColor = "lightblue";

});

input.addEventListener("blur", function() {

    input.style.backgroundColor = "white";

});
    

