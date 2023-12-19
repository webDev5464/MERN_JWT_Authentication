const mongoose = require("mongoose")

const authSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    pass: { type: String },
    conPass: { type: String },
    token: { type: String, default: "defaultToken" },
    isAuth: { type: String, default: false },
    avatar: { type: String, default: 'https://imgs.search.brave.com/6TTWV67tp-5sGkE4wipy3p7_OFXDoWCZ7sMdvNR-GSk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzE5LzMyLzkz/LzM2MF9GXzExOTMy/OTM4N19zVVRiVWRl/eWhrMG51aE53NVdh/RnZPeVFGbXhlcHBq/WC5qcGc' }
})

const authModule = mongoose.model("authData", authSchema)

module.exports = authModule