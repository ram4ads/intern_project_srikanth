const express = require("express");
const mongoose = require("mongoose");
const FormDetails = require("./model");
const cors = require("cors")

const app = express()
app.use(express.json({ limit: '0mb' }));
app.use(cors({ origin: "*" }))

mongoose.connect("mongodb+srv://srikanth:srikanth@cluster0.jsmfma8.mongodb.net/?retryWrites=true&w=majority").then(() =>
    console.log("mongoose DB Connceted Sucessfully"))

app.get("/", (req, res) => {
    res.send("Hellow MongoDb")
})

app.post("/register", async (req, res) => {
    try {
        const { userFirstName, userLastName, userDOB, userEmail, userMobileNum, userPassword, userConfirmPassco,userPhoto,userSignature,userCapturedImge } = req.body
        const exist = await FormDetails.findOne({ userEmail })
        if (exist) {
            res.status(400).send("User Already Exists")
        }
        if (userPassword !== userConfirmPassco) {
            res.status(400).send("Password Not Matched");
        }

        const newUser = new FormDetails({
            userFirstName, userLastName, userDOB, userEmail, userMobileNum, userPassword, userConfirmPassco,userPhoto,userSignature,userCapturedImge
        });
        // console.log(newUser);
        await newUser.save();
        // res.status(200).send("UserAddedSuccessFully");
        console.log(newUser.toObject()); // Convert the document to a plain JavaScript object

        res.status(200).json("new User Created"); // Send the document as a JSON response
    } catch (error) {
        console.log(error);
    }
});

app.get("/data" ,async (req,res) => {
    try {
        const getAllData = await FormDetails.find()
        res.json(getAllData);
    }
    catch (error) {
        console.log(error)
    }
})

app.get("/MyData" ,async (req,res) => {
    try {
        const getMyData = await FormDetails.findOne({userEmail:"srikanth@gmail.com"})
        res.json(getMyData);
    }
    catch (error) {
        console.log(error)
    }
})

app.listen(5000, () => console.log("express server running on 5000 port"));