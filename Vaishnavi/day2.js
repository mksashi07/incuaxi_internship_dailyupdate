let username = "mounika";
let password = "12345";
let otp = 6789;

if (username === "mounika") {

    console.log("Username is correct");

    if (password === "12345") {

        console.log("Password is correct");

        if (otp === 6789) {

            console.log("OTP verified");
            console.log("Login successful");

        } else {

            console.log("Invalid OTP");

        }

    } else {

        console.log("Wrong password");

    }

} else {

    console.log("Invalid username");

}

