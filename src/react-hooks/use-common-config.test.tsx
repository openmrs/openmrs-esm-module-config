import React from "react";
import { clearAll } from "../module-config/module-config";
import { render, wait } from "@testing-library/react";
import { useCommonConfig, clearCommonConfig } from "./use-common-config";
import { defineCommonSchema } from "../common-config/define-common-schema";

describe(`useConfig`, () => {
  afterEach(clearAll);
  afterEach(clearCommonConfig);

  it(`can return common config as a react hook`, async () => {
    defineCommonSchema();
    const { getByText } = render(
      <React.Suspense fallback={<div>Suspense!</div>}>
        <RenderConfig configKey="thing" />
      </React.Suspense>
    );

    await wait(() => {
      expect(getByText("5087AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")).toBeTruthy();
    });
  });
});

function RenderConfig(props) {
  const config = useCommonConfig();

  return <div>{config.concepts.pulseUuid}</div>;
}
