const superTest = require("supertest");
const app = require("./app");

describe("POST /users", () => {
  describe("given a username and password", () => {
    //should save the username and password to the DB
    // should respond with a json object containing the userid

    // should respond with a 200 status code

    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });

      console.log(response);

      expect(response.statusCode).toBe(200);
    });

    // should specify the json in the content type header

    test("Should specify json in the content type header", async () => {
      const response = await request(app).post("/users").send({
        username: "username",
        password: "password",
      });

      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

//   describe("when the username and password is missing", () => {
//     // should respond with a status code of 400
//   });
});
