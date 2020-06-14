import { defineConfigSchema } from "../module-config/module-config";
import CommonConfigSchema from "./schema";

export function defineCommonSchema() {
  defineConfigSchema("common", CommonConfigSchema);
}

defineCommonSchema();
