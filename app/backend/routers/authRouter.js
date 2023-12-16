const express = require("express")
const registerUser = require("../controllers/registerUser")

const authRouter = express.Router()

// require registerUser.js
authRouter.route("/register").post(registerUser)

module.exports = authRouter
