
const request = require("supertest");
const app = require("../server");

describe("Smart Expense Tracker API Tests", () => {

    test("Health API should return status OK", async () => {
        const response = await request(app).get("/api/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("ok");
    });

    test("Signup should reject empty fields", async () => {
        const response = await request(app)
            .post("/api/auth/signup")
            .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe(
            "Name, email and password are required."
        );
    });

    test("Signup should reject short passwords", async () => {
        const response = await request(app)
            .post("/api/auth/signup")
            .send({
                name: "Test User",
                email: "test@example.com",
                password: "123"
            });

        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe(
            "Password must be at least 6 characters."
        );
    });

});
