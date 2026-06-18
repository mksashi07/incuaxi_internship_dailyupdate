//Advance JS
//1.Debouncing
function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

function search() {
    console.log("Searching...");
}

const debouncedSearch = debounce(search, 1000);

debouncedSearch();
//2.Throttling
function throttle(func, delay) {
    let flag = true;

    return function () {
        if (flag) {
            func();
            flag = false;

            setTimeout(() => {
                flag = true;
            }, delay);
        }
    };
}

function clickHandler() {
    console.log("Button Clicked");
}

const throttledClick = throttle(clickHandler, 2000);

throttledClick();
//3.Shallow copy
let obj1 = {
    name: "Sameera",
    address: {
        city: "Anantapur"
    }
};

let obj2 = { ...obj1 };

obj2.address.city = "Hyderabad";

console.log(obj1.address.city);
//4.Deep Copy
let obj1 = {
    name: "Sameera",
    address: {
        city: "Anantapur"
    }
};

let obj2 = structuredClone(obj1);

obj2.address.city = "Hyderabad";

console.log(obj1.address.city);
console.log(obj2.address.city);
