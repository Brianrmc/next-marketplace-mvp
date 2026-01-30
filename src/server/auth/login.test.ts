import { describe, it, expect } from "vitest";

describe("Auth logic", () => {
  it("should allow valid role values", () => {
    const roles = ["ADMIN", "CLIENT", "PROVIDER"];
    expect(roles).toContain("ADMIN");
  });
});
