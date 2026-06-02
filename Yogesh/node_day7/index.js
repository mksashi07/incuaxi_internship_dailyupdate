const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

//auth/otp/send
app.use(express.json());
app.use("/auth", authRoutes);

//MongoDB connection setup 
mongoose.connect("mongodb://localhost:27017/harassment").then(() => {
    console.log("Connected to MongoDB")
}).catch(() => {
    console.log("Error connecting to MongoDB");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});