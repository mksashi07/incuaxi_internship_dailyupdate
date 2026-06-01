
const text = "Hello JavaScript! My phone number is 9876543210 and email is test@example.com.";
// 1. Test if a pattern exists
const hasJavaScript = /JavaScript/.test(text);
console.log("Contains JavaScript:", hasJavaScript);

// 2. Find first match
const phone = text.match(/\d{10}/);
console.log("Phone Number:", phone[0]);

// 3. Find email
const email = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
console.log("Email:", email[0]);

// 4. Replace text
const updatedText = text.replace(/JavaScript/, "JS");
console.log("Updated Text:", updatedText);

// 5. Global search
const sentence = "cat bat rat cat mat";
const words = sentence.match(/cat/g);
console.log("All 'cat' matches:", words);

// 6. Case-insensitive search
const result = /hello/i.test(text);
console.log("Contains hello (ignore case):", result);

// 7. Validate username (letters, numbers, underscore)
const username = "user_123";
const isValidUser = /^[a-zA-Z0-9_]+$/.test(username);
console.log("Valid Username:", isValidUser);

// 8. Validate password (at least 8 chars, one uppercase, one lowercase, one digit)
const password = "Test1234";
const isValidPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
console.log("Valid Password:", isValidPassword);

// 9. Extract all numbers
const numbers = "Price: 100, Discount: 20, Final: 80";
const extractedNumbers = numbers.match(/\d+/g);
console.log("Numbers:", extractedNumbers);

// 10. Split using RegExp
const data = "apple,banana;orange grape";
const items = data.split(/[,; ]+/);
console.log("Items:", items);