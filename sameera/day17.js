//Browser APIs
//1.Local storage
//store data
localStorage.setItem("name", "Sameera");
//get data
let name = localStorage.getItem("name");
console.log(name);
//remove data
localStorage.removeItem("name");
//clear all data
localStorage.clear();

//2.Session Storage
//Store Data
sessionStorage.setItem("user", "Sameera");
//Get Data
console.log(sessionStorage.getItem("user"));
//Remove Data
sessionStorage.removeItem("user");

//3.Cookies
//Create Cookie
document.cookie = "username=Sameera";
//Create Cookie with Expiry
document.cookie =
  "username=Sameera; expires=Fri, 31 Dec 2027 12:00:00 UTC";
  //read cookies
  console.log(document.cookie);
  //delete cookie
  document.cookie =
  "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

  //Geolocation API
  navigator.geolocation.getCurrentPosition(
    function(position) {
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
    }
);
//NOTIFICATION API
Notification.requestPermission()
.then(permission => {
    if(permission === "granted") {
        new Notification("Hello Sameera!");
    }
});
//CANVAS API
const canvas =
document.getElementById("myCanvas");

const ctx = canvas.getContext("2d");

ctx.fillRect(50, 50, 100, 80);
//DRAW A CIRCLE
ctx.beginPath();

ctx.arc(100, 100, 50, 0, 2 * Math.PI);

ctx.stroke();
//Web Workers
self.onmessage = function(event) {
    let result = event.data * 2;

    self.postMessage(result);
};
