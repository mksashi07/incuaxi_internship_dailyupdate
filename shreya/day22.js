// Select Canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// Rectangle
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);
// Circle
ctx.beginPath();
ctx.arc(250, 70, 50, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
// Line
ctx.beginPath();
ctx.moveTo(350, 20);
ctx.lineTo(500, 120);
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.stroke();
// Text
ctx.font = "30px Arial";
ctx.fillStyle = "purple";
ctx.fillText("JavaScript Canvas", 20, 180);
// Stroke Text
ctx.strokeStyle = "black";
ctx.strokeText("Graphics Demo", 20, 230);
// Gradient
let gradient = ctx.createLinearGradient(0, 250, 500, 250);
gradient.addColorStop(0, "red");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(1, "green");
ctx.fillStyle = gradient;
ctx.fillRect(20, 260, 500, 80);
// Polygon
ctx.beginPath();
ctx.moveTo(600, 50);
ctx.lineTo(700, 150);
ctx.lineTo(500, 150);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();
// Arc
ctx.beginPath();
ctx.arc(650, 250, 60, 0, Math.PI);
ctx.strokeStyle = "brown";
ctx.lineWidth = 4;
ctx.stroke();
// Image Drawing Example
const img = new Image();
img.onload = function () {
    ctx.drawImage(img, 550, 300, 150, 150);
};
img.src = "https://via.placeholder.com/150";
// Animation Example
let x = 0;
function animate() {
    ctx.clearRect(0, 470, canvas.width, 100);
    ctx.beginPath();
    ctx.arc(x, 520, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
    x += 2;
    if (x > canvas.width) {
        x = 0;
    }
    requestAnimationFrame(animate);
}
animate();