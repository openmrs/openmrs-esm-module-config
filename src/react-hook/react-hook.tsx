import React from "react";
import * as Config from "../module-config/module-config";

// I was thinking I'd have the context shared by having the module
// writer do
// <UseConfig moduleName="@openmrs/esm-login">
//   < ... >
//     <Bar />
//   </ ... >
// </UseConfig>
//
// where Bar would ideally be able to do
//   const moduleConfig = useModuleConfig()
//
type UseConfigProps = { moduleName: string; children: React.ReactNode };
export function UseConfig(props: UseConfigProps) {
  const ModuleNameContext = React.createContext(props.moduleName);

  // how do I make this available to descendants?
  function useModuleConfig() {
    const [config, setConfig] = React.useState(null);
    const moduleName = React.useContext(ModuleNameContext);
    if (!config) {
      throw Config.getConfig(moduleName);
    } else {
      return config;
    }
  }

  return (
    /* I assume we don't want to make all client code use Suspense */
    <React.Suspense fallback={<div>loading config...</div>}>
      {props.children}
    </React.Suspense>
  );
}
