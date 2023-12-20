const mongoose = require("mongoose")

const authSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    pass: { type: String },
    conPass: { type: String },
    token: { type: String, default: "defaultToken" },
    isAuth: { type: String, default: false },
    avatar: { type: String, default: '../assets/DefaultUserProfile.webp' }
})

const authModule = mongoose.model("authData", authSchema)

module.exports = authModule