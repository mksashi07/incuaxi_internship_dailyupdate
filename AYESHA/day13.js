
// JAVASCRIPT TEMPORAL API - COMPLETE SAMPLE

// 1. TEMPORAL INTRO
console.log("1. TEMPORAL INTRO");
const today = new Date();
console.log("Old Date Object:", today);
const instant = Temporal.Instant.fromEpochMilliseconds(Date.now());
console.log("Temporal Instant:", instant.toString());
console.log("\n");

// 2. TEMPORAL vs DATE
console.log("2. TEMPORAL vs DATE");
// Old Date Problems
const oldDate = new Date("2025-01-01");
console.log("Date API:", oldDate);
// Temporal Solution
const plainDate = Temporal.PlainDate.from("2025-01-01");
console.log("Temporal PlainDate:", plainDate.toString());
console.log("\n");

// 3. TEMPORAL DURATION
console.log("3. TEMPORAL DURATION");
const duration = Temporal.Duration.from({
    hours: 5,
    minutes: 30,
    seconds: 45
});
console.log("Duration:", duration.toString());
console.log("Hours:", duration.hours);
console.log("Minutes:", duration.minutes);
console.log("\n");

// 4. TEMPORAL INSTANT
console.log("4. TEMPORAL INSTANT");
const currentInstant = Temporal.Instant.fromEpochSeconds(1700000000);
console.log("Instant:", currentInstant.toString());
console.log("Epoch Milliseconds:", currentInstant.epochMilliseconds);
console.log("Epoch Nanoseconds:", currentInstant.epochNanoseconds);
console.log("\n");

// 5. TEMPORAL PLAINDATETIME
console.log("5. TEMPORAL PLAINDATETIME");
const dateTime = Temporal.PlainDateTime.from(
    "2025-05-31T10:30:45"
);
console.log("DateTime:", dateTime.toString());
console.log("Year:", dateTime.year);
console.log("Month:", dateTime.month);
console.log("Day:", dateTime.day);
console.log("Hour:", dateTime.hour);
console.log("\n");

// 6. TEMPORAL PLAINDATE
console.log("6. TEMPORAL PLAINDATE");
const birthDate = Temporal.PlainDate.from("2005-08-15");
console.log("Birth Date:", birthDate.toString());
console.log("Day Of Week:", birthDate.dayOfWeek);
console.log("Day Of Year:", birthDate.dayOfYear);
console.log("Days In Month:", birthDate.daysInMonth);
console.log("\n");

// 7. TEMPORAL PLAINYEARMONTH
console.log("7. TEMPORAL PLAINYEARMONTH");
const yearMonth = Temporal.PlainYearMonth.from("2025-05");
console.log("YearMonth:", yearMonth.toString());
console.log("Year:", yearMonth.year);
console.log("Month:", yearMonth.month);
console.log("\n");

// 8. TEMPORAL PLAINMONTHDAY
console.log("8. TEMPORAL PLAINMONTHDAY");
const festival = Temporal.PlainMonthDay.from("05-31");
console.log("MonthDay:", festival.toString());
console.log("Month:", festival.month);
console.log("Day:", festival.day);
console.log("\n");

// 9. TEMPORAL PLAINTIME
console.log("9. TEMPORAL PLAINTIME");
const time = Temporal.PlainTime.from("14:45:30");
console.log("Time:", time.toString());
console.log("Hour:", time.hour);
console.log("Minute:", time.minute);
console.log("Second:", time.second);
console.log("\n");

// 10. TEMPORAL ZONEDDATETIME
console.log("10. TEMPORAL ZONEDDATETIME");
const zoned = Temporal.ZonedDateTime.from(
    "2025-05-31T10:30:00+05:30[Asia/Kolkata]"
);
console.log("ZonedDateTime:", zoned.toString());
console.log("Time Zone:", zoned.timeZoneId);
console.log("Offset:", zoned.offset);
console.log("\n");

// 11. TEMPORAL NOW
console.log("11. TEMPORAL NOW");
console.log("Current Instant:");
console.log(Temporal.Now.instant().toString());
console.log("Current PlainDate:");
console.log(
    Temporal.Now.plainDateISO().toString()
);
console.log("Current PlainTime:");
console.log(
    Temporal.Now.plainTimeISO().toString()
);
console.log("Current ZonedDateTime:");
console.log(
    Temporal.Now.zonedDateTimeISO().toString()
);
console.log("\n");

// 12. TEMPORAL ARITHMETIC
console.log("12. TEMPORAL ARITHMETIC");
const startDate = Temporal.PlainDate.from("2025-01-01");
const addedDate = startDate.add({
    days: 10,
    months: 2
});
const subtractedDate = startDate.subtract({
    weeks: 2
});
console.log("Start Date:", startDate.toString());
console.log("After Add:", addedDate.toString());
console.log("After Subtract:", subtractedDate.toString());
console.log("\n");

// 13. TEMPORAL SINCE / UNTIL
console.log("13. TEMPORAL SINCE / UNTIL");
const d1 = Temporal.PlainDate.from("2025-01-01");
const d2 = Temporal.PlainDate.from("2025-12-31");
const sinceResult = d2.since(d1);
const untilResult = d1.until(d2);
console.log("Since:", sinceResult.toString());
console.log("Until:", untilResult.toString());
console.log("\n");

// 14. TEMPORAL COMPARE
console.log("14. TEMPORAL COMPARE");
const c1 = Temporal.PlainDate.from("2025-01-01");
const c2 = Temporal.PlainDate.from("2025-05-01");
console.log(
    "Compare Result:",
    Temporal.PlainDate.compare(c1, c2)
);
console.log(
    "Equals:",
    c1.equals(c2)
);
console.log("\n");

// 15. TEMPORAL CONVERSION
console.log("15. TEMPORAL CONVERSION");
const convertDate = Temporal.PlainDate.from("2025-06-01");
const convertDateTime = convertDate.toPlainDateTime(
    Temporal.PlainTime.from("10:20:30")
);
console.log("PlainDate:", convertDate.toString());
console.log("Converted DateTime:", convertDateTime.toString());
console.log("\n");

// 16. TEMPORAL FORMATS
console.log("16. TEMPORAL FORMATS");
const formatDate = Temporal.PlainDate.from("2025-12-25");
console.log("ISO Format:", formatDate.toString());
const localeString = formatDate.toLocaleString("en-IN");
console.log("Locale Format:", localeString);
console.log("\n");

// 17. TEMPORAL MISTAKES
console.log("17. TEMPORAL MISTAKES");
// Mistake 1
try {
    Temporal.PlainDate.from("invalid-date");
} catch (error) {
    console.log("Invalid Date Error:", error.message);
}
// Mistake 2
try {
    Temporal.PlainTime.from("25:00");
} catch (error) {
    console.log("Invalid Time Error:", error.message);
}
console.log("\n");

// 18. TEMPORAL MIGRATE
console.log("18. TEMPORAL MIGRATE");

// Old Date API
const oldApi = new Date();
// Convert Date -> Temporal
const migrated = Temporal.Instant.fromEpochMilliseconds(
    oldApi.getTime()
);
console.log("Old Date:", oldApi);
console.log("Migrated Temporal:", migrated.toString());
console.log("\n");

// 19. TEMPORAL STANDARDS
console.log("19. TEMPORAL STANDARDS");
const isoDate = Temporal.PlainDate.from("2025-05-31");
console.log("ISO Standard Date:", isoDate.toString());
const utcInstant = Temporal.Instant.from(
    "2025-05-31T10:00:00Z"
);
console.log("UTC Instant:", utcInstant.toString());
console.log("\n");

// 20. TEMPORAL REFERENCE
console.log("20. TEMPORAL REFERENCE");
// Quick Reference Objects
const reference = {
    PlainDate: Temporal.PlainDate.from("2025-01-01"),
    PlainTime: Temporal.PlainTime.from("12:30:00"),
    PlainDateTime: Temporal.PlainDateTime.from(
        "2025-01-01T12:30:00"
    ),
    ZonedDateTime: Temporal.ZonedDateTime.from(
        "2025-01-01T12:30:00+05:30[Asia/Kolkata]"
    ),
    Duration: Temporal.Duration.from({
        hours: 2,
        minutes: 15
    }),
    Instant: Temporal.Now.instant()
};
console.log(reference);
console.log("\n");

// BONUS EXAMPLES
console.log("BONUS EXAMPLES");
// Age Calculator
const dob = Temporal.PlainDate.from("2000-01-01");
const now = Temporal.Now.plainDateISO();
const age = now.since(dob);
console.log(
    `Age: ${age.years} years ${age.months} months ${age.days} days`
);
// Meeting Scheduler
const meeting = Temporal.ZonedDateTime.from(
    "2025-06-10T09:00:00+05:30[Asia/Kolkata]"
);
const meetingEnd = meeting.add({
    hours: 2
});
console.log("Meeting Start:", meeting.toString());
console.log("Meeting End:", meetingEnd.toString());
console.log("\n");
// END
console.log("==================================");
console.log("TEMPORAL API EXAMPLES COMPLETED");
console.log("==================================");