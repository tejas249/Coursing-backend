
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');
const { userRouter } = require('./route/user')
const { adminRouter } = require('./route/admin')
const { courseRouter } = require('./route/course')
const { userModel, courseModel, adminModel, purchaseModel } = require('./db')
// require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: ["https://learnio-lemon.vercel.app"],
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    }
));

app.get("/",(req,res) => {
    res.json("Hello")
})

app.use("/user",userRouter);
app.use("/admin",adminRouter);
app.use("/course",courseRouter);

async function main(){
    await mongoose.connect("mongodb+srv://tejaskamble0208:<db_password>@cluster0.1qzqb.mongodb.net/");
    const PORT = 3000;
    app.listen(PORT);
    console.log("listening on port " + PORT)
}
main();
