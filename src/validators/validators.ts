import { validator } from "./validator";

export const isString = validator(
  val => typeof val === "string",
  "must be a string"
);

export const isBoolean = validator(
  val => typeof val === "boolean",
  "must be a boolean"
);

export const isUuid = validator(
  val => val.replace(/-/g, "").match(/^[0-9a-f]{32}/i),
  "must be a valid UUID"
);

export const validators = { isString, isBoolean };
