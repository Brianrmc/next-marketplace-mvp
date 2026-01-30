import { describe, it, expect } from "vitest";
import { POST } from "./route";

describe("POST /api/login", () => {
  it("should fail with invalid credentials", async () => {
    const request = new Request("http://test/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: "fake@test.com",
        password: "wrong",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBeDefined();
  });
});
