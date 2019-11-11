import { isString, isBoolean } from "./validators";

describe("isString", () => {
  it("accepts strings", () => {
    expect(() => isString("", "")).not.toThrow();
  });

  it("rejects non-strings", () => {
    expect(() => isString("", [""])).toThrow();
  });
});

describe("isBoolean", () => {
  it("accepts bools", () => {
    expect(() => isBoolean("", false)).not.toThrow();
  });

  it("rejects non-bools", () => {
    expect(() => isBoolean("", 1)).toThrow();
  });
});
