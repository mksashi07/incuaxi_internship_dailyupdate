// Array of date strings
const dates = [
  "2026-06-01",
  "2026-06-05",
  "2026-06-10"
];

// Convert strings to Temporal dates
const temporalDates = dates.map(date =>
  Temporal.PlainDate.from(date)
);

console.log("Original Dates:");
temporalDates.forEach(date => console.log(date.toString()));

// Add 7 days to each date
const nextWeekDates = temporalDates.map(date =>
  date.add({ days: 7 })
);

console.log("\nDates After 7 Days:");
nextWeekDates.forEach(date => console.log(date.toString()));

// Filter dates after 2026-06-08
const filteredDates = nextWeekDates.filter(date =>
  date > Temporal.PlainDate.from("2026-06-08")
);

console.log("\nFiltered Dates:");
filteredDates.forEach(date => console.log(date.toString()));

// Find a specific date
const foundDate = nextWeekDates.find(date =>
  date.toString() === "2026-06-12"
);

console.log("\nFound Date:");
console.log(foundDate?.toString());

// Reduce example: total days difference from first date
const baseDate = Temporal.PlainDate.from("2026-06-01");

const totalDays = nextWeekDates.reduce((sum, date) => {
  return sum + baseDate.until(date).days;
}, 0);

console.log("\nTotal Days Difference:", totalDays);

// Current date in India timezone
const nowIndia = Temporal.Now.zonedDateTimeISO("Asia/Kolkata");

console.log("\nCurrent India Time:");
console.log(nowIndia.toString());

// Spread operator
const extraDates = ["2026-06-20", "2026-06-25"];
const allDates = [...dates, ...extraDates];

console.log("\nMerged Array:");
console.log(allDates);

// Destructuring
const [firstDate, secondDate] = allDates;

console.log("\nDestructured Values:");
console.log("First:", firstDate);
console.log("Second:", secondDate);