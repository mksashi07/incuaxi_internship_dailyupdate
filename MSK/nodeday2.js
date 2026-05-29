// Random Quote Generator

// Array of quotes
const quotes = [
    "Success starts with consistency.",
    "Practice makes progress.",
    "Code every day to improve.",
    "Small steps lead to big results.",
    "Never stop learning."
];

// Function to generate random quote
function generateQuote() {

    // Random index
    const randomIndex = Math.floor(
        Math.random() * quotes.length
    );

    // Display quote
    console.log("\nQuote of the Day:");
    console.log(quotes[randomIndex]);
}

// Function call
generateQuote();