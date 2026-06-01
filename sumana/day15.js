//1.Typing Speed Counter
const text = document.getElementById("text");
const result = document.getElementById("result");

let start;

text.addEventListener("input", () => {
  if (!start) start = Date.now();

  const words = text.value.trim().split(/\s+/).length;
  const minutes = (Date.now() - start) / 60000;

  result.textContent = `WPM: ${Math.round(words / minutes)}`;
});
//2. Lucky Number Generator
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.onclick = () => {
  result.textContent = Math.floor(Math.random() * 100) + 1;
};
//3. Click Counter Challenge
let count = 0;

document.getElementById("btn").onclick = () => {
  count++;
  document.getElementById("score").textContent = count;

  setTimeout(() => {
    alert(`Your score: ${count}`);
    count = 0;
  }, 5000);
};
//4. Mouse Position Tracker
document.addEventListener("mousemove", e => {
  document.getElementById("pos").textContent =
    `X: ${e.clientX}, Y: ${e.clientY}`;
});
//5. Random Emoji Generator
const emojis = ["😀", "😂", "😎", "🤖", "🔥", "🚀"];

document.getElementById("btn").onclick = () => {
  const random = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("emoji").textContent = random;
};
//  6. Name Initials Generator
function getInitials(name) {
  return name
    .split(" ")
    .map(word => word[0].toUpperCase())
    .join("");
}

console.log(getInitials("sumana angajala")); // SA
//7. Coin Toss Simulator
document.getElementById("btn").onclick = () => {
  const toss = Math.random() < 0.5 ? "Heads" : "Tails";
  document.getElementById("result").textContent = toss;
};
//8. Love Percentage Generator (Fun)
document.getElementById("btn").onclick = () => {
  const percent = Math.floor(Math.random() * 101);
  document.getElementById("result").textContent =
    `Love: ${percent}%`;
};

//9. Countdown Timer
let time = 10;

const timer = setInterval(() => {
  document.getElementById("timer").textContent = time;
  time--;
    if (time < 0) {
    clearInterval(timer);
    document.getElementById("timer").textContent = "Time's up!";
  } 
}, 1000);
//10. Random Color Generator
document.getElementById("btn").onclick = () => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;        
    document.body.style.backgroundColor = color;
    document.getElementById("color").textContent = color;
};
//11. Password Strength Checker
document.getElementById("password").oninput = () => {
  const password = document.getElementById("password").value;
  let strength = "Weak";
    if (password.length >= 8) strength = "Medium";
    if (password.length >= 12) strength = "Strong";
    document.getElementById("strength").textContent = strength;
};
//12. Simple User Registration and Login System
const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());

const users = [];                   
/*
   USER REGISTRATION
 */
app.post(
    "/register",
    async (req, res) => {           
        try {
            const {
                name,
                email,
                password,
                role
            } = req.body;

            const existingUser 
                = users.find(
                    user =>
                        user.email === email
                );      
            if (existingUser) {
                return res.status(400).json({
                    message:
                        "User Already Exists"
                });
            }
            const hashedPassword =
                await bcrypt.hash(
                    password,
                    10
                );  
            const user = {
                id: Date.now(),
                name,
                email,
                password: hashedPassword,
                role: role || "user"
            };
            users.push(user);
            res.status(201).json({
                message:
                    "Registration Successful"
            });
        } catch (error) {
            res.status(500).json({
                message:
                    error.message
            });
        }

// USER LOGIN
app.post(
    "/login",
    async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body;

            const user = users.find(
                u => u.email === email
            );
            if (!user) {
                return res.status(400).json({
                    message:
                        "Invalid Credentials"
                });
            }

            const isMatch = await bcrypt.compare(
                password,
                user.password
            );
            if (!isMatch) {
                return res.status(400).json({
                    message:
                        "Invalid Credentials"
                });
            }

            res.status(200).json({
                message:
                    "Login Successful"
            });
        } catch (error) {
            res.status(500).json({
                message:
                    error.message
            });
        }
    }
);
/*
   USER REGISTRATION
 */
app.post(
    "/register",
    async (req, res) => {
        try {
            const {
                name,       
                email,
                password,
                role
            } = req.body;
            const existingUser = users.find(
                user =>
                    user.email === email            
            );
            if (existingUser) {
                return res.status(400).json({   
                    message:
                        "User Already Exists"
                });
            }   
            const hashedPassword =
                await bcrypt.hash(
                    password,
                    10  
                );
            const user = {
                id: Date.now(),
                name,   
                email,
                password: hashedPassword,
                role: role || "user"
            };
            users.push(user);
            res.status(201).json({      
                message:
                    "Registration Successful"
            });
        } catch (error) {
            res.status(500).json({
                message:    
                    error.message
            });
        }   
