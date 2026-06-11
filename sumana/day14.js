"use strict";
// JAVASCRIPT DATE & TEMPORAL API DEMO

// 1. Current Date and Time

const now = new Date();

console.log("Current Date:", now);
console.log("Date String:", now.toDateString());
console.log("Time String:", now.toTimeString());
console.log("ISO String:", now.toISOString());
// 2. Creating Custom Dates

const birthday = new Date("2000-05-15");

console.log("\nBirthday:", birthday);

const customDate = new Date(2026, 11, 25, 10, 30, 0);

console.log("Custom Date:", customDate);
// 3. Get Methods

console.log("\nYear:", now.getFullYear());
console.log("Month:", now.getMonth() + 1);
console.log("Day:", now.getDate());
console.log("Week Day:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
// 4. Set Methods

const modifiedDate = new Date();

modifiedDate.setFullYear(2030);
modifiedDate.setMonth(5);
modifiedDate.setDate(20);

console.log("\nModified Date:", modifiedDate);
// 5. Timestamp Operations

const timestamp = Date.now();

console.log("\nCurrent Timestamp:", timestamp);

const dateFromTimestamp = new Date(timestamp);

console.log("Date From Timestamp:", dateFromTimestamp);
// 6. Date Formatting

console.log("\nLocale Date:",
    now.toLocaleDateString());

console.log("Locale Time:",
    now.toLocaleTimeString());

console.log("Locale String:",
    now.toLocaleString());
// 7. Comparing Dates

const startDate = new Date("2026-01-01");
const endDate = new Date("2026-12-31");

console.log("\nDate Comparison:");
console.log(startDate < endDate);
console.log(startDate > endDate);
// 8. Date Difference

const diffMilliseconds = endDate - startDate;

const diffDays =
    diffMilliseconds /
    (1000 * 60 * 60 * 24);

console.log("\nDifference in Days:",
    diffDays);
// 9. Add Days, Months, Years

const futureDate = new Date();

futureDate.setDate(
    futureDate.getDate() + 10
);

futureDate.setMonth(
    futureDate.getMonth() + 2
);

futureDate.setFullYear(
    futureDate.getFullYear() + 1
);

console.log("\nFuture Date:",
    futureDate);
// 10. UTC Methods

console.log("\nUTC Year:",
    now.getUTCFullYear());

console.log("UTC Month:",
    now.getUTCMonth() + 1);

console.log("UTC Date:",
    now.getUTCDate());

console.log("UTC Hours:",
    now.getUTCHours());
// 11. International Formatting

const formatter =
    new Intl.DateTimeFormat(
        "en-IN",
        {
            dateStyle: "full",
            timeStyle: "long"
        }
    );

console.log(
    "\nFormatted Date:",
    formatter.format(now)
);
// 12. Time Zone Information

console.log(
    "\nTime Zone:",
    Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone
);
// 13. Countdown Timer Example

const eventDate =
    new Date("2026-12-31");

const today = new Date();

const remainingDays =
    Math.ceil(
        (eventDate - today) /
        (1000 * 60 * 60 * 24)
    );

console.log(
    "\nDays Remaining:",
    remainingDays
);

// 14. Date Validation

const invalidDate =
    new Date("invalid");

console.log(
    "\nIs Valid Date:",
    !isNaN(invalidDate.getTime())
);

// 15. Temporal API Demo
// (Works in environments supporting Temporal)

if (typeof Temporal !== "undefined") {

    const plainDate =
        Temporal.PlainDate.from(
            "2026-05-31"
        );

    console.log(
        "\nTemporal Date:",
        plainDate.toString()
    );

    const nextWeek =
        plainDate.add({
            days: 7
        });

    console.log(
        "After 7 Days:",
        nextWeek.toString()
    );

    const previousMonth =
        plainDate.subtract({
            months: 1
        });

    console.log(
        "Previous Month:",
        previousMonth.toString()
    );

    const duration =
        plainDate.until(nextWeek);

    console.log(
        "Duration:",
        duration.toString()
    );

} else {

    console.log(
        "\nTemporal API is not supported in this environment."
    );
}

// 16. Mini Age Calculator

const birthDate =
    new Date("2000-05-15");

const age =
    new Date().getFullYear() -
    birthDate.getFullYear();

console.log("\nCalculated Age:", age);

// 17. Digital Clock

function showCurrentTime() {
    const now = new Date();

    const time =
        now.toLocaleTimeString();

    console.log("Current Time:", time);
}

showCurrentTime();

// 18. Date Utility Object

const DateUtils = {

    format(date) {
        return date.toLocaleDateString();
    },

    addDays(date, days) {
        const newDate =
            new Date(date);

        newDate.setDate(
            newDate.getDate() + days
        );

        return newDate;
    },

    difference(date1, date2) {
        return Math.floor(
            (date2 - date1) /
            (1000 * 60 * 60 * 24)
        );
    }
};

console.log(
    "\nUtility Format:",
    DateUtils.format(new Date())
);

console.log(
    "Add 5 Days:",
    DateUtils.addDays(
        new Date(),
        5
    )
);

console.log(
    "Difference:",
    DateUtils.difference(
        new Date("2026-01-01"),
        new Date("2026-01-10")
    ),
    "days"
);