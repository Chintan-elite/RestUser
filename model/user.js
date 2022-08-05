const mongoose = require("mongoose");


const userScema = new mongoose.Schema({
    uname: String,
    email: String,
    Password: String,

})

module.exports = mongoose.model("User", userScema)