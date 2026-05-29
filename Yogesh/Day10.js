//index.js

import {Pi, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(Pi);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference} cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)} cm^3`);



//mathutil.js

export const Pi = 3.14159;

function getCircumference(radius) {
    return 2 * Pi * radius;
}

function getArea(radius) {
    return Pi * radius * radius;
}

function getVolume(radius) {
    return (4 / 3) * Pi * radius * radius * radius;
}


//HTML file

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">    
</head>
<body>
    
    <div id="calculator">
        <input id="display" readonly>
        <div id="keys">
            <button onclick="appendToDisplay('+')" class="operator-btn">+</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('-')" class="operator-btn">-</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('*')" class="operator-btn">*</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('/')" class="operator-btn">/</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="calculate()">=</button>
            <button onclick="clearDisplay()">C</button>

        </div>
    </div>

    <script src="index.js"></script>
</body>
</html>



//CSS file

#body{
    margin:0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: hsl(0, 0%, 95%);
}


#calculator{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 500px;
    height: 500px;
    background-color: hsl(0, 0%, 20%);
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#display{
    width: 70%;
    padding: 20px;
    font-size: 5rem;
    color: white;
    text-align: left;
    border: none;
    background-color: hsl(0, 0%, 20%);
}


#keys{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 25px;

}


button{
    width:90px;
    height: 50px;  
    border-radius: 50px;
    border: none;
    background-color: hsl(0, 0%, 30%);
    color: white;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
}
button:hover{
    background-color: hsl(0, 0%, 40%);
}

button:active{
    background-color: hsl(0, 0%, 50%);
}

.operator-btn{
    
    background-color: hsl(33, 76%, 51%);
}
.operator-btn:hover{
    background-color: hsl(33, 76%, 61%);
}


//Java Script file

 // CALCULATOR

 const display = document.getElementById('display');

 function appendToDisplay(input) {
    display.value += input;

 }

 function clearDisplay() {
    display.value = '';
 }

 function calculate() {
    display.value = eval(display.value);


 }