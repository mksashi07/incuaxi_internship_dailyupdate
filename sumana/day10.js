// jQuery Selectors Practice

$(document).ready(function () {

    // Element Selector
    $("p").css("color", "blue");

    // ID Selector
    $("#title").text("jQuery Selectors Demo");

    // Class Selector
    $(".box").css("background", "lightgreen");

    // Multiple Selectors
    $("h1, h2").css("color", "red");

    // Attribute Selector
    $("[href]").css("text-decoration", "none");

    // Descendant Selector
    $("div p").css("font-weight", "bold");

    // Child Selector
    $("ul > li").css("color", "purple");

    // First and Last
    $("li:first").css("background", "yellow");
    $("li:last").css("background", "orange");

    // Even and Odd
    $("tr:even").css("background", "#f2f2f2");
    $("tr:odd").css("background", "#ddd");

    // Contains
    $("p:contains('JavaScript')").css("border", "2px solid green");

    // Form Selectors
    $(":text").css("border", "2px solid blue");
    $(":checkbox").prop("checked", true);

    // Selected Option
    console.log($("option:selected").text());

    // Button Click Event
    $("#hideBtn").click(function () {
        $(".box").hide();
    });

    $("#showBtn").click(function () {
        $(".box").show();
    });

    $("#toggleBtn").click(function () {
        $(".box").toggle();
    });

});
// JAVASCRIPT BOM (BROWSER OBJECT MODEL)

// 1. WINDOW OBJECT
console.log("Window Width:", window.innerWidth);
console.log("Window Height:", window.innerHeight);

// 2. SCREEN OBJECT
console.log("Screen Width:", screen.width);
console.log("Screen Height:", screen.height);
console.log("Color Depth:", screen.colorDepth);

// 3. LOCATION OBJECT
console.log("Current URL:", location.href);
console.log("Hostname:", location.hostname);
console.log("Pathname:", location.pathname);
console.log("Protocol:", location.protocol);

// 4. HISTORY OBJECT
console.log("History Length:", history.length);

// 5. NAVIGATOR OBJECT
console.log("Browser:", navigator.appName);
console.log("Version:", navigator.appVersion);
console.log("Platform:", navigator.platform);
console.log("Language:", navigator.language);
console.log("Online:", navigator.onLine);

// 6. POPUP BOXES
// alert("Welcome to JavaScript BOM");

// let user = prompt("Enter Your Name");
// console.log("User:", user);

// let result = confirm("Do you like JavaScript?");
// console.log("Confirmation:", result);

// 7. TIMING FUNCTIONS
setTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);

let count = 0;

const timer = setInterval(() => {
    count++;
    console.log(`Interval Count: ${count}`);

    if (count === 5) {
        clearInterval(timer);
        console.log("Interval Stopped");
    }
}, 1000);

// 8. COOKIES
document.cookie = "username=Sumana";

console.log("Cookies:", document.cookie);

// DIGITAL CLOCK
setInterval(() => {
    const now = new Date();
    console.log("Current Time:", now.toLocaleTimeString());
}, 1000);

// JAVASCRIPT HTML 

// Create Main Container
const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

// Change Body Style
document.body.style.fontFamily = "Arial";
document.body.style.backgroundColor = "#f4f4f4";
document.body.style.padding = "20px";

// CREATE HEADING

const heading = document.createElement("h1");
heading.innerHTML = "JavaScript DOM Practice Project";
heading.style.color = "darkblue";
heading.style.textAlign = "center";
container.appendChild(heading);

// CREATE PARAGRAPH


const para = document.createElement("p");
para.textContent =
  "This paragraph is created dynamically using JavaScript.";
para.style.fontSize = "18px";
container.appendChild(para);

// CREATE INPUT BOX

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter your name";
input.style.padding = "10px";
input.style.marginRight = "10px";
container.appendChild(input);

// CREATE BUTTON

const button = document.createElement("button");
button.textContent = "Submit";
button.style.padding = "10px";
button.style.cursor = "pointer";
container.appendChild(button);

// RESULT AREA

const result = document.createElement("h3");
container.appendChild(result);

// CLICK EVENT

button.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please enter your name");
  } else {
    result.textContent = `Welcome ${input.value}`;
  }
});

// MOUSE EVENTS

button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "green";
  button.style.color = "white";
});

button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "";
  button.style.color = "";
});

// KEYUP EVENT

input.addEventListener("keyup", () => {
  console.log("Typing:", input.value);
});