const passwordField = document.getElementById("password");
const lengthInput = document.getElementById("length");

const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function generatePassword() {

    let characters = "";

    if (uppercaseCheck.checked) {
        characters += upperChars;
    }

    if (lowercaseCheck.checked) {
        characters += lowerChars;
    }

    if (numbersCheck.checked) {
        characters += numberChars;
    }

    if (symbolsCheck.checked) {
        characters += symbolChars;
    }

    if (characters === "") {
        alert("Please select at least one option!");
        return;
    }

    let password = "";
    let length = Number(lengthInput.value);

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordField.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {

    if (passwordField.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordField.value);

    alert("Password Copied!");
});

generatePassword();