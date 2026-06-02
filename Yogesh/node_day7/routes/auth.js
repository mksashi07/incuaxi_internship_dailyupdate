const { Router } = require("express");
const { emailRegex } = require("../utils/regex");

const router = Router();

router.post("/otp/send", (req, res) => {
    const { email } = req.body.email;
    if(emailRegex.test(email)){
        return res.status(400).json({message: "Invalid email format"});
    }
    sendOtp(email, res);
});

module.exports = router;