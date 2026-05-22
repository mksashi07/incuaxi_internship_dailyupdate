
// JavaScript DOM + BOM Examples
// Single JS File Only


// Selecting Elements
function selectElement() {

    let element =
    document.getElementById("title");

    console.log(element);

    let classElement =
    document.getElementsByClassName("demo");

    console.log(classElement);

    let tagElement =
    document.getElementsByTagName("p");

    console.log(tagElement);

    let query =
    document.querySelector(".demo");

    console.log(query);

}


// Form Validation
function validateForm(){

    let name =
    document.getElementById(
        "name"
    ).value;

    if(name===""){

        alert(
            "Name Required"
        );

        return false;
    }

    return true;

}


// Mouse Events
function mouseClick(){

    console.log(
        "Mouse Clicked"
    );

}


function doubleClick(){

    console.log(
        "Double Clicked"
    );

}


function mouseHover(){

    console.log(
        "Mouse Over"
    );

}


// Keyboard Events
function keyDown(){

    console.log(
        "Key Pressed"
    );

}


function keyUp(){

    console.log(
        "Key Released"
    );

}


// Load Event
window.onload=function(){

    console.log(
        "Page Loaded"
    );

}


// Timing Events
function startTimer(){

    setTimeout(()=>{

        console.log(
            "Executed after 3 sec"
        );

    },3000);

}


function repeatTask(){

    setInterval(()=>{

        console.log(
            "Running every 2 sec"
        );

    },2000);

}


// Manage Events
function hello(){

    console.log(
        "Button Clicked"
    );

}


document
.getElementById("btn")
.addEventListener(
    "click",
    hello
);


function removeEvent(){

    document
    .getElementById("btn")
    .removeEventListener(
        "click",
        hello
    );

}


// Event Examples
function eventExample(){

    console.log(
        "Event Triggered"
    );

}


// Event Listener
document
.getElementById(
    "listenerBtn"
)
.addEventListener(
    "click",
    ()=>{

        console.log(
            "Listener Active"
        );

    }
);


// DOM Animation
function moveBox(){

    let box=
    document.getElementById(
        "animate"
    );

    let position=0;

    let animation=
    setInterval(frame,5);

    function frame(){

        if(position==300){

            clearInterval(
                animation
            );

        }

        else{

            position++;

            box.style.left=
            position+"px";

        }

    }

}


// Document Reference
function documentInfo(){

    console.log(
        document.title
    );

    console.log(
        document.URL
    );

    console.log(
        document.forms
    );

    console.log(
        document.images
    );

}


// Element Reference
function elementReference(){

    let element=
    document.getElementById(
        "sample"
    );

    console.log(
        element.innerText
    );

}


// DOM Create Element
function createElement(){

    let p=
    document.createElement("p");

    let text=
    document.createTextNode(
        "New Paragraph"
    );

    p.appendChild(text);

    document.body
    .appendChild(p);

}


// DOM Remove Element
function removeElement(){

    let item=
    document.getElementById(
        "remove"
    );

    item.remove();

}


// DOM Replace Element
function replaceElement(){

    let newNode=
    document.createElement(
        "h2"
    );

    newNode.innerText=
    "Replaced";

    let oldNode=
    document.getElementById(
        "old"
    );

    oldNode.parentNode
    .replaceChild(
        newNode,
        oldNode
    );

}


// BOM
function showBOM(){

    console.log(
        window.innerWidth
    );

    console.log(
        navigator.userAgent
    );

    console.log(
        location.href
    );

}


// Window Methods
function openWindow(){

    window.open(
        "https://google.com"
    );

}


function closeWindow(){

    window.close();

}


// Alert Prompt Confirm
function alertBox(){

    alert(
        "Hello"
    );

}


function confirmBox(){

    let result=
    confirm(
        "Continue?"
    );

    console.log(
        result
    );

}


function promptBox(){

    let name=
    prompt(
        "Enter Name"
    );

    console.log(
        name
    );

}