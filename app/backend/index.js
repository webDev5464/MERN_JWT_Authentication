const express = require("express")
const cors = require("cors")
const $server = express()
// dotenv
require("dotenv").config()

$server.use(cors())
$server.use(express.json())
$server.use(express.urlencoded({ extended: true }))
const authRouter = require("./routers/authRouter")
const cookieParser = require("cookie-parser")
$server.use(cookieParser())

// database Connection 
require("./configs/databaseConnection")(process.env.DATABASE)

// authentication router
$server.use("/api/auth", authRouter)

const serverStart = (PORT) => {
  try {
    $server.listen(PORT, () => console.log(`Server Started: http://localhost:${PORT}`))
  } catch (err) {
    console.error(err);
    process.exit()
  }
}

serverStart(process.env.PORT)