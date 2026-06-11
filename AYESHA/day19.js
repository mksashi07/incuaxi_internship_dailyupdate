//1. Counter
//2. Event Listener
//3. To-Do List
//4. Modal Popup
//5. Form Validation

// node projects.js


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counter = 0;
let todoList = [];

// ---------------------------
// Event Listener Class
// ---------------------------
class EventListenerDemo {
  constructor() {
    this.events = {};
  }

  addEventListener(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  dispatchEvent(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  }
}

const eventDemo = new EventListenerDemo();

eventDemo.addEventListener("login", (user) => {
  console.log(`\n[EVENT] Welcome ${user}`);
});

eventDemo.addEventListener("logout", (user) => {
  console.log(`\n[EVENT] Goodbye ${user}`);
});

// ---------------------------
// Counter Project
// ---------------------------
function counterProject() {
  console.log("\n=== COUNTER PROJECT ===");
  counter++;
  console.log("Counter Increased:", counter);

  counter--;
  console.log("Counter Decreased:", counter);

  counter = 0;
  console.log("Counter Reset:", counter);

  mainMenu();
}

// ---------------------------
// Event Listener Project
// ---------------------------
function eventListenerProject() {
  console.log("\n=== EVENT LISTENER PROJECT ===");

  eventDemo.dispatchEvent("login", "Ayesha");
  eventDemo.dispatchEvent("logout", "Ayesha");

  mainMenu();
}

// ---------------------------
// To-Do List Project
// ---------------------------
function todoProject() {
  console.log("\n=== TO-DO LIST PROJECT ===");

  todoList.push("Learn JavaScript");
  todoList.push("Learn Node.js");
  todoList.push("Build Project");

  console.log("\nTasks:");
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

  console.log("\nRemoving First Task...");
  todoList.shift();

  console.log("\nUpdated Tasks:");
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });

  mainMenu();
}

// ---------------------------
// Modal Popup Project
// ---------------------------
function modalProject() {
  console.log("\n=== MODAL POPUP PROJECT ===");

  console.log("\n[MODAL OPEN]");
  console.log("Title : Success");
  console.log("Message : Data Saved Successfully");
  console.log("[MODAL CLOSE]");

  mainMenu();
}

// ---------------------------
// Form Validation Project
// ---------------------------
function formValidationProject() {
  console.log("\n=== FORM VALIDATION PROJECT ===");

  const form = {
    name: "Ayesha",
    email: "ayesha@gmail.com",
    password: "123456",
  };

  if (form.name.length < 3) {
    console.log("Invalid Name");
  } else if (!form.email.includes("@")) {
    console.log("Invalid Email");
  } else if (form.password.length < 6) {
    console.log("Password Too Short");
  } else {
    console.log("Form Validation Successful");
    console.log(form);
  }

  mainMenu();
}

// ---------------------------
// Menu
// ---------------------------
function mainMenu() {
  console.log(`............`);

  // Break method
  rl.question("Choose Project: ", (choice) => {
    switch (choice) {
      case "1":
        counterProject();
        break;

      case "2":
        eventListenerProject();
        break;

      case "3":
        todoProject();
        break;

      case "4":
        modalProject();
        break;

      case "5":
        formValidationProject();
        break;

      case "0":
        console.log("Program Ended.");
        rl.close();
        break;

      default:
        console.log("Invalid Choice");
        mainMenu();
    }
  });
}

mainMenu();