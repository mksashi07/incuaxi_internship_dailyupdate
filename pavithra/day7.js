document.getElementById("heading").innerHTML =
"Welcome to JavaScript";
//change text colour
document.getElementById("para").style.color =
"blue";
//change back ground colour
document.body.style.backgroundColor =
"yellow";
//botton click event
function showMessage() {
    alert("Button Clicked");
}
//event listener
const box = document.getElementById("box");
box.addEventListener("mouseover", function() {
    console.log("Mouse Entered");
});
//mouse out event
const box = document.getElementById("box");
box.addEventListener("mouseout", function() {
    console.log("Mouse Left");
});
//keyboard event
document.addEventListener("keydown", function() {
    console.log("Key Pressed");
});
//input value readd
const value =
document.getElementById("username").value;
console.log(value);
//hide element
document.getElementById("demo")
.style.display = "none";
//show element
document.getElementById("demo")
.style.display = "block";
//create new element
const p = document.createElement("p");
p.innerHTML = "New Paragraph";
document.body.appendChild(p);
//remove element
document.getElementById("removeMe")
.remove();
//add css class
document.getElementById("text")
.classList.remove("active");
//toggle css class
document.getElementById("box")
.classList.toggle("dark");
//counter program
let count = 0;
function increase() {
    count++;
    console.log(count);
}
//change image
document.getElementById("img").src =
"newimage.jpg";
//form validation
function validate() {
    const name =
    document.getElementById("name").value;
    if(name === "") {
        console.log("Name Required");
    }
    else {
        console.log("Form Submitted");
    }
}
//double click event
document.getElementById("btn")
.addEventListener("dblclick", function() {
    console.log("Double Clicked");
});
//change font size
document.getElementById("text")
.style.fontSize = "40px";
//real time character counter
const input =
document.getElementById("textBox");
input.addEventListener("keyup", function() {
    console.log(this.value.length);
});
//drop down change event
document.getElementById("course")
.addEventListener("change", function() {
    console.log(this.value);
});
//window load event
window.addEventListener("load", function() {
    console.log("Page Loaded");
});
//scroll event
window.addEventListener("scroll", function() {
    console.log("Page Scrolling");
});
//focus event
document.getElementById("input")
.addEventListener("focus", function() {
    console.log("Input Focused");
});
//blur event
document.getElementById("input")
.addEventListener("blur", function() {
    console.log("Input Lost Focus");
});
//toggle password
function togglePassword() {
    let input =
    document.getElementById("password");
    if(input.type === "password") {
        input.type = "text";
    }
    else {
        input.type = "password";
    }
}
