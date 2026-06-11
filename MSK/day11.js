// Create heading
const heading = document.createElement("h1");
heading.textContent = "Event Handling Demo";

// Create button
const button = document.createElement("button");
button.textContent = "Click Me";

// Create paragraph
const message = document.createElement("p");
message.textContent = "Waiting for an event...";

// Add elements to page
document.body.appendChild(heading);
document.body.appendChild(button);
document.body.appendChild(message);

// Click Event
button.addEventListener("click", () => {
    message.textContent = "Button Clicked!";
});

// Mouse Over Event
button.addEventListener("mouseover", () => {
    button.textContent = "Mouse is Here!";
});

// Mouse Out Event
button.addEventListener("mouseout", () => {
    button.textContent = "Click Me";
});

// Double Click Event
button.addEventListener("dblclick", () => {
    heading.style.color = "blue";
});