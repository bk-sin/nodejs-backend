const config = require("config")
const db_config = config.get("db_config")
const Sequelize = require("sequelize")
const sequelize = new Sequelize(
  db_config.database,
  db_config.username,
  db_config.password,
  {
    host: db_config.host,
    dialect: "mysql",
  }
)

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error))

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
module.exports = db
