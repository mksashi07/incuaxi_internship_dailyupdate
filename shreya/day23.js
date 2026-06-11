// Temporal Polyfill
const { Temporal } = require("@js-temporal/polyfill");
// 1. Temporal Intro
function temporalIntro() {
    const now = Temporal.Now.zonedDateTimeISO();
    console.log("\n=== Temporal Intro ===");
    console.log("Current Zoned DateTime:");
    console.log(now.toString());
}
// 2. Temporal vs Date
function temporalVsDate() {
    const jsDate = new Date();
    const temporalInstant = Temporal.Now.instant();
    console.log("\n=== Temporal vs Date ===");
    console.log("JavaScript Date:");
    console.log(jsDate.toString());
    console.log("\nTemporal Instant:");
    console.log(temporalInstant.toString());
}
// 3. Temporal Duration
function temporalDuration() {
    const duration = Temporal.Duration.from({
        days: 2,
        hours: 5,
        minutes: 30
    });
    console.log("\n=== Temporal Duration ===");
    console.log(duration.toString());
}
// 4. Temporal Instant
function temporalInstant() {
    const now = Temporal.Now.instant();
    const future = now.add({ hours: 1 });
    console.log("\n=== Temporal Instant ===");
    console.log("Now:", now.toString());
    console.log("After 1 hour:", future.toString());
}
// 5. PlainDateTime
function temporalPlainDateTime() {
    const current = Temporal.Now.plainDateTimeISO();
    const custom = Temporal.PlainDateTime.from({
        year: 2026,
        month: 1,
        day: 1,
        hour: 10,
        minute: 30
    });
    console.log("\n=== PlainDateTime ===");
    console.log("Current:", current.toString());
    console.log("Custom:", custom.toString());
}
// 6. PlainDate
function temporalPlainDate() {
    const today = Temporal.Now.plainDateISO();
    const birthday = Temporal.PlainDate.from({
        year: 2000,
        month: 5,
        day: 15
    });
    console.log("\n=== PlainDate ===");
    console.log("Today:", today.toString());
    console.log("Birthday:", birthday.toString());
}
