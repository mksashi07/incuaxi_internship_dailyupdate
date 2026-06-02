const { Schema } = require("mongoose");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const USER_ROLES = {
    ADMIN : "ADMIN",
    CITIZEN : "CITIZEN",
}

const userSchema = new Schema({
    name: String,
    email:{
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (value) => {
                return emailRegex.test(value);
            },
            message: "Invalid email format"
        },
    },
    otp: Number,
    role: {
        type: String,
        enum: [USER_ROLES.ADMIN, USER_ROLES.CITIZEN],
        default: USER_ROLES.CITIZEN,
    },
    otpExpiry: Number, //epoc in secc
    createdAt: Number,
    updatedAt: Number,
});

module.exports = model("User", userSchema);

