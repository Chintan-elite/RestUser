const express = require("express");
const router = express.Router();
const User = require("../model/user")

router.post("/users", async (req, resp) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

router.get("/users", async (req, resp) => {
    try {

        const result = await User.find();
        resp.send(result)
    } catch (error) {
        resp.send(error)
    }
})

module.exports = router
