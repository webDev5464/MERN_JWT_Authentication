const $authModel = require("../models/authModel")
const $bcrypt = require("bcryptjs")

const registerUser = async (req, res) => {
    const { username, email, pass, conPass } = req.body
    const existingEmail = await $authModel.findOne({ email })
    const existingUsername = await $authModel.findOne({ username })

    try {
        if (existingEmail) throw "This email is already exist"
        if (existingUsername) throw "This username is already exist"
        if (!pass) throw "Password is required"
        if (!conPass) throw "Also require confirm password"
        if (pass !== conPass) throw "Does not match password and confirm password"

        if (username, email, pass) {
            const userSuccessMsg = `Hello ${username}, You are register Successfully.`
            res.send({
                process: true, msg: userSuccessMsg, $authModel: await $authModel({
                    username, email, pass: await $bcrypt.hash(pass, 10)
                }).save()
            })
        }
    } catch (err) {
        res.send({ process: false, msg: err })
    }
}

module.exports = registerUser