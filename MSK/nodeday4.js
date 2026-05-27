console.log("Start");

setTimeout(() => {
    console.log("Timer Callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise Callback");
});

process.nextTick(() => {
    console.log("Next Tick Callback");
});

console.log("End");