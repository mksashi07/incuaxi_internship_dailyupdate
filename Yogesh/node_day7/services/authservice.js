const user = require("../models/User");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth : {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    }

})


function sendOtpEmail(email, otp){
    return transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Login for harassment app  ",
        html: `
            <p>Below is OTP for login which valid for 30 minutes.</p>
            <h2>${otp}</h2>
        `,
    })
}

//send otp tp specified email address
const sendOtp = async (email, res) => {
    try{
        const user = await User.findOne({email});
        const currentTimeStamp = parseInt(new Date().getTime() / 1000);
        if(user && user.otpExpiry && user.otpExpiry > currentTimeStamp ) {
            return res
            .status(400)
            .json({ message: "OTP already sent to email"})

        }

        const otp = parseInt(Math.random() * 10000);
        const otpExpiry = currentTimeStamp + 1800;

        await sendOtpEmail(email, otp);

        //once otp is sent we need to record that in our database
        if(user){
            console.log("OTp send for existing user", otp)
            user.otp=otp;
            user.otpExpiry=otpExpiry;

            await user.save();
        }else{
            console.log("OTP sent for new User", otp);
            await User.create({
                email,
                otp,
                otpExpiry,
                createdAt: currentTimeStamp,
                updatedAt: currentTimeStamp,
            });
        }
        re.status(201).json({ message : "OTP sent succesfully"});

    } catch(error){
        console.log("An error occured while sending otp", error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports = { sendOtp };