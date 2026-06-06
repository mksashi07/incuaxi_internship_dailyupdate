function convertTemperature() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let type = document.getElementById("conversionType").value;
    let result;

    if (isNaN(temp)) {
        document.getElementById("result").textContent =
            "Please enter a valid temperature.";
        return;
    }

    if (type === "CtoF") {
        result = (temp * 9/5) + 32;
        document.getElementById("result").textContent =
            `${temp}°C = ${result.toFixed(2)}°F`;
    } else {
        result = (temp - 32) * 5/9;
        document.getElementById("result").textContent =
            `${temp}°F = ${result.toFixed(2)}°C`;
    }
}