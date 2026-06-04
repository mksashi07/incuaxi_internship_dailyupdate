const box = document.querySelector("#box");

const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const toggleBtn = document.querySelector("#toggleBtn");
const checkBtn = document.querySelector("#checkBtn");

// Add Class
addBtn.addEventListener("click", () => {
    box.classList.add("active");
});

// Remove Class
removeBtn.addEventListener("click", () => {
    box.classList.remove("active");
});

// Toggle Class
toggleBtn.addEventListener("click", () => {
    box.classList.toggle("active");
});

// Check Class
checkBtn.addEventListener("click", () => {
    const result = box.classList.contains("active");

    if (result) {
        alert("Active class exists");
    } else {
        alert("Active class does not exist");
    }
});