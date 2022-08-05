const mongoose = require("mongoose")
const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const PORT = process.env.PORT
app.use(express.json())
const url = "mongodb+srv://chintan:tops123@cluster0.yucszyj.mongodb.net/RestUser?retryWrites=true&w=majority"
console.log("db")
mongoose.connect(url).then(() => {
    console.log("db connected !!!")
}).catch(err => {
    console.log(err);
})

const userrouter = require("./router/userrouter")
app.use("/", userrouter)

app.listen(PORT, (req, resp) => {
    console.log("resver runningon port " + PORT)
})