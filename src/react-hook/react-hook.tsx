import React from "react";
import * as Config from "../module-config/module-config";

export const ModuleNameContext = React.createContext(null);

export function useConfig() {
  const moduleName = React.useContext(ModuleNameContext);
  const [config, setConfig]: [null | Object, Function] = React.useState(null);
  if (!moduleName) {
    throw Error(
      "ModuleNameContext has not been provided. This should come from openmrs-react-root-decorator"
    );
  }
  if (!config) {
    // React will prevent the client component from rendering until the promise resolves
    throw Config.getConfig(moduleName).then(res => {
      setConfig(res);
    });
  } else {
    return config;
  }
}
