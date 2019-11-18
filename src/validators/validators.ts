// Validators are functions that return a string with an explanation when
// they fail. Any other return value is interpreted as passing.

export const isString = val => typeof val === "string" || "must be a string";

export const isBoolean = val => typeof val === "boolean" || "must be a boolean";
