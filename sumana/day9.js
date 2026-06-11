// WEB APIs 

// Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data));

// Geolocation API
navigator.geolocation.getCurrentPosition((pos) => {
  console.log(pos.coords.latitude);
  console.log(pos.coords.longitude);
});

// Web Storage API
localStorage.setItem("name", "Sumana");
console.log(localStorage.getItem("name"));

// History API
console.log(history.length);

// Validation API
const input = document.createElement("input");
input.required = true;
console.log(input.checkValidity());

// Pointer Events API
document.addEventListener("pointermove", (e) => {
  console.log(e.clientX, e.clientY);
});

// Web Worker API
if (typeof(Worker) !== "undefined") {
  console.log("Web Workers Supported");
}

//BOM
// Window Object
console.log(window.innerWidth);
console.log(window.innerHeight);

// Screen Object
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);

// Location Object
console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.protocol);

// History Object
history.back();
history.forward();

// Navigator Object
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine);

// Alert Box
alert("Hello User!");

// Confirm Box
if (confirm("Do you like JavaScript?")) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}

// Prompt Box
let name = prompt("Enter your name");
console.log(name);

// setTimeout
setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);

// setInterval
let timer = setInterval(() => {
  console.log("Running...");
}, 1000);

// Stop Interval
clearInterval(timer);

// Create Cookie
document.cookie =
  "username=Sumana; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";

// Read Cookie
console.log(document.cookie);

// Delete Cookie
document.cookie =
  "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  //Ajax
  function loadData() {

  // Create XMLHttpRequest object
  const xhttp = new XMLHttpRequest();

  // Callback function
  xhttp.onload = function () {

    // Update HTML content
    document.getElementById("demo").innerHTML =
      this.responseText;
  };

  // Send GET request
  xhttp.open("GET", "data.txt", true);

  // Send request to server
  xhttp.send();
}
// AJAX Live Search Example

function showHint(str) {

  if (str.length === 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }

  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    document.getElementById("txtHint").innerHTML =
      this.responseText;
  };

  xhttp.open("GET", "gethint.php?q=" + str, true);

  xhttp.send();
}
// Modern AJAX using Fetch API

function fetchData() {

  fetch("data.txt")
    .then(response => response.text())
    .then(data => {
      document.getElementById("demo").innerHTML = data;
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

// JAVASCRIPT JSON 

// JSON Object
const student = {
  name: "Sumana",
  age: 22,
  course: "JavaScript",
  skills: ["HTML", "CSS", "JS"]
};

console.log("Student Name:", student.name);
console.log("Skills:", student.skills);

// JSON.parse()
// Convert JSON String -> Object

const jsonString = '{"city":"Hyderabad","pincode":500001}';

const obj = JSON.parse(jsonString);

console.log("City:", obj.city);

// JSON.stringify()
// Convert Object -> JSON String

const user = {
  username: "john123",
  active: true
};

const jsonData = JSON.stringify(user);

console.log("JSON Data:", jsonData);

// JSON Array

const products = [
  {
    id: 1,
    item: "Laptop",
    price: 50000
  },
  {
    id: 2,
    item: "Mobile",
    price: 20000
  }
];

console.log("First Product:", products[0].item);

// Fetch API with JSON

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => {
    console.log("User Data:");
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Adding New JSON Object

const employees = [];

employees.push({
  id: 101,
  name: "Sam",
  department: "IT"
});

console.log(employees);

// Loop Through JSON Array

products.forEach(product => {
  console.log(product.item + " - ₹" + product.price);
});

// Nested JSON Object
const company = {
  name: "Tech Solutions",
  address: {
    city: "Bangalore",
    state: "Karnataka"
  }
};

console.log(company.address.city);
