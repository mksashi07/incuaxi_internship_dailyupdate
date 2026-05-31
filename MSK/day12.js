// ================================
// DOM MANIPULATION
// ================================

// Create Heading
const heading = document.createElement("h1");
heading.textContent = "JavaScript this, call, apply, bind Demo";

// Create Button
const button = document.createElement("button");
button.textContent = "Show Details";

// Create Output Area
const output = document.createElement("div");
output.style.marginTop = "20px";

// Add to Page
document.body.appendChild(heading);
document.body.appendChild(button);
document.body.appendChild(output);

// ================================
// OBJECT
// ================================

const student = {
    name: "Bhairava",
    course: "JavaScript",
    city: "Guntur"
};

// ================================
// FUNCTION USING 'this'
// ================================

function showDetails(duration, level) {
    return `
        Name: ${this.name}<br>
        Course: ${this.course}<br>
        City: ${this.city}<br>
        Duration: ${duration} Months<br>
        Level: ${level}
    `;
}

// ================================
// EVENT HANDLING
// ================================

button.addEventListener("click", () => {

    // Change heading style
    heading.style.color = "blue";

    // call()
    const callResult =
        "<h3>Using call()</h3>" +
        showDetails.call(student, 6, "Intermediate");

    // apply()
    const applyResult =
        "<h3>Using apply()</h3>" +
        showDetails.apply(student, [8, "Advanced"]);

    // bind()
    const boundFunction =
        showDetails.bind(student, 12, "Expert");

    const bindResult =
        "<h3>Using bind()</h3>" +
        boundFunction();

    // Display Results
    output.innerHTML =
        callResult +
        "<hr>" +
        applyResult +
        "<hr>" +
        bindResult;

});

// Mouse Over Event
button.addEventListener("mouseover", () => {
    button.textContent = "Click to Execute";
});

// Mouse Out Event
button.addEventListener("mouseout", () => {
    button.textContent = "Show Details";
});