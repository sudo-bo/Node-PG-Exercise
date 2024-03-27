const request = require('supertest');
const app = require('../app');
const db = require('../db');


// Testing GET /companies
describe("GET /companies", () => {
    test("Gets a list of companies", async () => {
      const response = await request(app).get('/companies');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({companies: expect.any(Array)});
    });
  });

// Testing GET /companies/[code]
describe("GET /companies/:code", () => {
test("Gets a single company", async () => {
    const response = await request(app).get('/companies/apple'); // Use an existing company code
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
    company: expect.objectContaining({
        code: 'apple',
        name: expect.any(String),
        description: expect.any(String)
    })
    });
});

test("Responds with 404 for non-existing company", async () => {
    const response = await request(app).get('/companies/nonexistent');
    expect(response.statusCode).toBe(404);
});
});
 