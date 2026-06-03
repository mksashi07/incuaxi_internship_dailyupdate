//Node list

let buttons = document.querySelectorAll(".myButtons");

//Add HTML/Css properties

buttons.forEach(button => {
    button.style.backgroundColor= "green";
    button.textContent += "😎";
})

//Click event listner

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

//MOUSEOVER EVENT

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
    });
});


//Mouseout event

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "green";
    });
});


// //ADD an Element

const newButton = document.createElement("button");

newButton.textContent = "Button 5";

newButton.classList = "myButtons";

document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

//Remove an Element

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});
