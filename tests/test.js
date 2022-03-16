const app = require("../app")
const request = require("supertest")

describe("probando un GET", function () {
  it("GET /", function () {
    request(app).get("/").expect(200)
  })
})
