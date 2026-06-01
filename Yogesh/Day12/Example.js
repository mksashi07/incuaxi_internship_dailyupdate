//Add and change elements

//create the element

const newH1 = document.createElement("h1");

//add content to the element

newH1.textContent = "This is Box1 heading";
newH1.id = "MYH1"
newH1.style.color = "tomato";
newH1.style.textAlign = "center";


const newH2 = document.createElement("h2");
newH2.textContent = "This is Box2 heading";
newH2.id = "MYH2";
newH2.style.color = "blue";
newH2.style.textAlign = "center";



const newH3 = document.createElement("h3");
newH3.textContent = "This is Box3 heading";
newH3.id = "MYH3";
newH3.style.color = "green";
newH3.style.textAlign = "center";


const newH4 = document.createElement("h4");
newH4.textContent = "This is Box4 heading";
newH4.id = "MYH4";
newH4.style.color = "red";
newH4.style.textAlign = "center";

//append the element to the DOM

document.getElementById("box1").prepend(newH1);

document.getElementById("box2").prepend(newH2);

document.getElementById("box3").prepend(newH3);

document.getElementById("box4").prepend(newH4);

const box3 = document.getElementById("box3");
document.body.insertBefore(newH3, box3);
