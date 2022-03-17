module.exports = {
  port: 3000,
  domain: "localhost",
  db_config: {
    username: "emiliano",
    password: "EmiPass99!",
    database: "nodejs",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "0",
  },

  //DATABASE
  sql_uri: "localhost",

  //Emails
  email: {
    provider: "example",
    user: "X",
    password: "Y",
  },

  //Logger

  logger: "dev",
}
