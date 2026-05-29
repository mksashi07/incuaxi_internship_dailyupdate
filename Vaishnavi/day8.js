//Regular Expression -  It is a pattern used to search, match, validate, and replace text in strings.
//Simple Match - Checks whether a word exists in a string.

let text = "Hello JavaScript";
let pattern = /JavaScript/;

console.log(pattern.test(text));

//test() - Used to check whether the pattern exists.

let str = "Welcome to JS";
let pattern = /JS/;

console.log(pattern.test(str));

//exec() - Returns detailed matched information.

let str = "I love JavaScript";
let pattern = /love/;

console.log(pattern.exec(str));

//match() - Finds matches from a string.

let str = "apple mango apple banana";
let result = str.match(/apple/g);

console.log(result);

//search()c- Returns the position of matched text.

let str = "Learn JavaScript";
console.log(str.search(/JavaScript/));

//replace() - Replaces text using RegExp.

let str = "Hello World";
let result = str.replace(/World/, "JavaScript");

console.log(result);

//Global Flag g - The g flag finds all matches in a string instead of stopping after the first match.
let str = "cat bat cat";
console.log(str.match(/cat/g));

//Case Insensitive Flag i
let str = "HELLO";
console.log(/hello/i.test(str));

//Digits \d
let str = "My number is 12345";

console.log(str.match(/\d/g));

//Email Validation - Checks whether the email format is correct.

let email = "test@gmail.com";

let pattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

console.log(pattern.test(email));

//Phone Number Validation
let phone = "9876543210";

let pattern = /^[0-9]{10}$/;

console.log(pattern.test(phone));

//Remove Spaces
let str = "Java Script";

let result = str.replace(/\s/g, "");

console.log(result);

//Check Starting Word
let str = "Hello World";
console.log(/^Hello/.test(str));

//Check Ending Word
let str = "Welcome.js";
console.log(/js$/.test(str));

//RegExp Modifier Flags-  These are special characters added after a regular expression pattern to change how the search works.
//The g flag finds all matches in a string instead of stopping after the first match.
let str = "cat bat cat rat";
let result = str.match(/cat/g);

console.log(result);
//Case-Insensitive Flag (i) - The i flag ignores uppercase and lowercase differences.
let str = "HELLO";
let result = /hello/i.test(str);

console.log(result);
//Multiline Flag (m) - The m flag allows ^ (start of line)and $(end of line) to work with multiple lines.
let str = `JavaScript
Python
Java`;
let result = /^Python/m.test(str);
console.log(result);

// DotAll Flag (s) - let str = "Hello\nWorld";
let str = "Hello\nWorld";
let result = /Hello.World/s.test(str);
console.log(result);

//Sticky Flag (y) - The y flag matches only from the exact position specified by lastIndex.
let str = "hello hello";
let pattern = /hello/y;
pattern.lastIndex = 6;
console.log(pattern.test(str));

//Using Multiple Flags Together
let str = "Cat cat CAT";
let result = str.match(/cat/gi);
console.log(result);

//Dot (.) - Matches any single character except newline.
let str = "cat";
console.log(/c.t/.test(str));

//Caret (^) - Checks whether the string starts with a pattern.
let str = "JavaScript";
console.log(/^Java/.test(str));

//Dollar ($) - Checks whether the string ends with a pattern.
let str = "file.js";
console.log(/js$/.test(str));

//Asterisk (*) - Matches zero or more occurrences.
let str = "heeello";
console.log(/he*llo/.test(str));

//Plus (+) - Matches one or more occurrences.
let str = "heeello";
console.log(/he+llo/.test(str));

//Question Mark (?)- Makes a character optional.
let str1 = "color";
let str2 = "colour";

console.log(/colou?r/.test(str1));
console.log(/colou?r/.test(str2));

//Square Brackets ([]) - Matches any one character inside brackets.
let str = "bat";
console.log(/[abc]at/.test(str));

//Negated Set ([^]) - Matches characters NOT inside brackets.
let str = "cat";
console.log(/[^b]at/.test(str));

//Parentheses (()) - Used for grouping patterns.
let str = "hahamouni";
console.log(/(ha)+/.test(str));

//Pipe (|) - Acts like OR operator.
let str = "apple";
console.log(/apple|banana/.test(str));

//Curly Braces ({}) - Specifies exact number of repetitions.
let str = "987";
console.log(/\d{3}/.test(str));

//Escape Character (\) - Used to treat special characters as normal characters.
let str = "5+5";
console.log(/\+/.test(str));
