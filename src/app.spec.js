const { it, expect, describe } = require("@jest/globals");
const app = require("./app");
const request = require("supertest");

describe("GET /restaurants", () => {
  let response;
  beforeAll(async () => {
    response = await request(app).get("/restaurants");
  });
  it("successfully returns a 200 response", async () => {
    expect(response.statusCode).toBe(200);
  });
  it("returns 'content-Type' of 'application/json'", () => {
    expect(response.headers["content-type"]).toMatch("application/json");
  });
  it("returns an array", () => {
    expect(Array.isArray(response.body)).toBe(true);
  });
  it("any objects in list have the correct properties", () => {
    expect(
      response.body.every(
        ({ name, location, cuisine }) => !!name && !!location && !!cuisine
      )
    ).toBe(true);
  });
});
describe("GET /restaurant/:id", () => {
  let response;
  beforeAll(async () => {
    response = await request(app).get("/restaurants/11");
  });
  it("successfully returns a 200 response", async () => {
    expect(response.statusCode).toBe(200);
  });
  it("returns 'content-Type' of 'application/json'", () => {
    expect(response.headers["content-type"]).toMatch("application/json");
  });
  it("returns an object", () => {
    expect(typeof response.body).toBe("object");
  });
});
