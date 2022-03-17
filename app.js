const express = require("express")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const config = require("config")
const indexRouter = require("./routes/index")
const db = require("./services/sequelize")

const app = express()

db.sequelize.sync({force: true}).then(() => {
  console.log("Drop and re-sync db.")
})

app.use(logger(config.get("logger")))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/", indexRouter)

module.exports = app
