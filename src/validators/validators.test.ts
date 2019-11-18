import { isString, isBoolean } from "./validators";

describe("isString", () => {
  it("accepts strings", () => {
    // string return value signifies failure, anything else is ok
    expect(typeof isString("")).not.toBe("string");
  });

  it("rejects non-strings", () => {
    expect(isString([""])).toMatch(/must be a string/);
  });
});

describe("isBoolean", () => {
  it("accepts bools", () => {
    expect(typeof isBoolean(false)).not.toBe("string");
  });

  it("rejects non-bools", () => {
    expect(isBoolean(1)).toMatch(/must be.*bool/);
  });
});
