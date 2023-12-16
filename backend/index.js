const express = require("express")
const $server = express()
$server.use(express.json())
$server.use(express.urlencoded({ extended: true }))

require("dotenv").config()
require("./configs/databaseConnection")(process.env.DATABASE)


const PORT = process.env.PORT
$server.listen(PORT, () => console.log(`Server Started: http://localhost:${PORT}`))