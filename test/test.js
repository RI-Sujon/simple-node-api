const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with I Love Bangladesh!", (done) => {
        request(app).get("/").expect("I Love Bangladesh!", done);
    })
});

describe("GET /multi/10/5", () => {
    it("The multiplication of 10 and 5 is = 50", (done) => {
        request(app).get("/multi/10/5").expect("The multiplication of 10 and 5 is = 50", done);
    })
});