import { describe, it, expect } from "vitest";

describe.concurrent("test", () => {
  it("example", () => {
    expect(1 + 1).eq(2);
  });
});
