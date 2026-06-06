const display = document.getElementById("display");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let timer = null;

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function updateDisplay() {

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(3, "0");

    display.textContent = `${h} : ${m} : ${s} : ${ms}`;
}

function startStopwatch() {

    if (timer !== null) return;

    timer = setInterval(() => {

        milliseconds += 10;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 10);
}

function pauseStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {

    clearInterval(timer);
    timer = null;

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    updateDisplay();
}

startBtn.addEventListener("click", startStopwatch);

pauseBtn.addEventListener("click", pauseStopwatch);

resetBtn.addEventListener("click", resetStopwatch);