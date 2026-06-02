//event Listener
//events: mouseover, mouseout

const myBox = document.getElementById("myBox");

const myButton = document.getElementById("myButton");

function changecolor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "Happy Coding 😊";

}

myButton.addEventListener("click", changecolor);


//Mouseover Event
myButton.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😶‍🌫️";
}); 


//Mouseout Event
myButton.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "lightblue";
    event.target.textContent = "Click Me 😊";
});



//event Listener

const myBox = document.getElementById("myBox");

const myButton = document.getElementById("myButton");

function changecolor(event){
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "Happy Coding 😊";

}
myButton.addEventListener("click", changecolor);

//Mouseover Event
myButton.addEventListener("mouseover", function(event){
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😶‍🌫️";
}); 


//Mouseout Event
myButton.addEventListener("mouseout", function(event){
    myBox.style.backgroundColor = "lightblue";
    myBox.textContent = "Click Me 😊";
}); 

//events: keydown, keyup

const myBox= document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😂";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "👌";
    myBox.style.backgroundColor = "darkblue";
})


// Other Concept
//Key Events: Arrow Keys
const myBox = document.getElementById("myBox");
const moveamount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    myBox.textContent = "😂";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "👌";
    myBox.style.backgroundColor = "darkblue";
})

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                y -= moveamount;
                break;
            case "ArrowDown":
                y += moveamount;
                break;
            case "ArrowLeft":
                x -= moveamount;
                break;
            case "ArrowRight":
                x += moveamount;
                break;
        }
        myBox.style.transform = `translate(${x}px, ${y}px)`;
    }
});