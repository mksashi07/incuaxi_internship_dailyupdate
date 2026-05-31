// JAVASCRIPT REGEXP PRACTICE

// Sample Text
const text = `
Name: Sumana
Email: sumana@gmail.com
Phone: 9876543210
Website: https://example.com
Tags: #javascript #regex
Age: 22
`;

// FLAGS
console.log("FLAGS");
console.log(text.match(/javascript/gi));

// CLASSES
console.log("\nCLASSES");
console.log("Digits:", text.match(/\d/g));
console.log("Words:", text.match(/\w+/g));
console.log("Spaces:", text.match(/\s/g).length);

// METACHARACTERS
console.log("\nMETACHARACTERS");
console.log(/^Name/m.test(text));
console.log(/22$/.test(text.trim()));
console.log(/S.man./.test("Sumana"));

// ASSERTIONS
console.log("\nASSERTIONS");
console.log(text.match(/\bSumana\b/));
console.log("100px".match(/\d+(?=px)/));

// GROUPS
console.log("\nGROUPS");

const date = "2026-05-29";
const result = date.match(/(\d{4})-(\d{2})-(\d{2})/);

console.log("Year:", result[1]);
console.log("Month:", result[2]);
console.log("Day:", result[3]);

// QUANTIFIERS
console.log("\nQUANTIFIERS");

console.log("12345".match(/\d+/));
console.log("abc".match(/[a-z]{3}/));
console.log("999".match(/\d{2,4}/));

// PATTERNS
console.log("\nPATTERNS");

const emailPattern =
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log("Valid Email:",
emailPattern.test("sumana@gmail.com"));

const phonePattern = /^\d{10}$/;

console.log("Valid Phone:",
phonePattern.test("9876543210"));

// REGEXP OBJECT
console.log("\nREGEXP OBJECT");

const reg = new RegExp("Sumana");

console.log(reg.test(text));

// METHODS
console.log("\nMETHODS");

// test()
console.log("test():", /gmail/.test(text));

// exec()
console.log("exec():", /gmail/.exec(text));

// match()
console.log("match():", text.match(/\d+/g));

// matchAll()
for (const item of text.matchAll(/\d+/g)) {
    console.log("matchAll():", item[0]);
}

// search()
console.log("search():", text.search(/Phone/));

// replace()
console.log(
    "replace():",
    text.replace(/Sumana/, "Developer")
);

// split()
console.log(
    "split():",
    "HTML,CSS,JS,Node".split(/,/)
);

// REAL WORLD EXAMPLES
console.log("\nREAL WORLD EXAMPLES");

// Extract Email
console.log(
    "Emails:",
    text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g)
);

// Extract Phone
console.log(
    "Phones:",
    text.match(/\d{10}/g)
);

// Extract URL
console.log(
    "URLs:",
    text.match(/https?:\/\/[^\s]+/g)
);

// Extract Hashtags
console.log(
    "Hashtags:",
    text.match(/#\w+/g)
);

// CREATE LIST

const listTitle = document.createElement("h2");
listTitle.textContent = "Dynamic List";
container.appendChild(listTitle);

const ul = document.createElement("ul");

for (let i = 1; i <= 10; i++) {
  const li = document.createElement("li");
  li.textContent = `List Item ${i}`;
  ul.appendChild(li);
}

container.appendChild(ul);

// ADD NEW LIST ITEM

const addBtn = document.createElement("button");
addBtn.textContent = "Add Item";
addBtn.style.marginTop = "10px";
container.appendChild(addBtn);

let count = 11;

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `List Item ${count++}`;
  ul.appendChild(li);
});

// REMOVE LAST ITEM
const removeBtn = document.createElement("button");
removeBtn.textContent = "Remove Item";
removeBtn.style.marginLeft = "10px";
container.appendChild(removeBtn);

removeBtn.addEventListener("click", () => {
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
});

// CHANGE CSS USING JAVASCRIPT

const styleBtn = document.createElement("button");
styleBtn.textContent = "Change Theme";
styleBtn.style.marginLeft = "10px";
container.appendChild(styleBtn);

let darkMode = false;

styleBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "black";
  }
});

// IMAGE SECTION

const img = document.createElement("img");

img.src =
  "https://picsum.photos/300";

img.style.display = "block";
img.style.marginTop = "20px";

container.appendChild(img);

// CHANGE IMAGE

const imgBtn = document.createElement("button");
imgBtn.textContent = "Change Image";
imgBtn.style.display = "block";
imgBtn.style.marginTop = "10px";

container.appendChild(imgBtn);

imgBtn.addEventListener("click", () => {
  img.src =
    `https://picsum.photos/300?random=${Math.random()}`;
});

// DOM NAVIGATION

console.log("Parent:", heading.parentElement);

console.log("Children:",
container.children);

console.log("First Child:",
container.firstElementChild);

console.log("Last Child:",
container.lastElementChild);

// DOCUMENT FEATURES

console.log("Title:",
document.title);

console.log("URL:",
document.URL);

console.log("Images:",
document.images);

console.log("Links:",
document.links);

console.log("Forms:",
document.forms);

// CLOCK USING DOM

const clock = document.createElement("h2");
clock.style.marginTop = "20px";
container.appendChild(clock);

setInterval(() => {
  const time = new Date();
  clock.textContent =
    time.toLocaleTimeString();
}, 1000);
// RANDOM COLOR GENERATOR

const colorBtn = document.createElement("button");
colorBtn.textContent = "Random Background";
colorBtn.style.display = "block";
colorBtn.style.marginTop = "15px";

container.appendChild(colorBtn);

colorBtn.addEventListener("click", () => {

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  document.body.style.backgroundColor =
    `rgb(${r},${g},${b})`;

});
// FOOTER

const footer = document.createElement("h3");
footer.textContent =
  "DOM Manipulation Project Completed";

footer.style.marginTop = "30px";

container.appendChild(footer);