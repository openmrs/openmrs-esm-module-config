import * as Config from "../module-config/module-config";
import { CommonConfig } from "../common-config/schema";

let config;
let error;
export function useCommonConfig(): CommonConfig {
  if (error) {
    // Suspense will just keep calling the hook if the thrown promise rejects.
    // So we check ahead of time and avoid creating a new promise.
    throw error;
  }
  if (!config) {
    // React will prevent the client component from rendering until the promise resolves
    throw Config.getCommonConfig()
      .then(res => {
        config = res;
      })
      .catch(err => {
        error = err;
      });
  } else {
    return config as CommonConfig;
  }
}

export function clearCommonConfig() {
  config = undefined;
}
