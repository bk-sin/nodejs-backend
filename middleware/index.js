module.exports.error404 = function (req, res, next) {
  next(/* createError(404) */)
}

module.exports.generalErrorHandler = function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  res.status(err.status || 500)
  res.render("error")
}
