import React from "react";
import LoadingOverlay from "./LoadingOverlay";

const LoadingOverlayMeta = {
  title: "atoms/LoadingOverlay",
  component: LoadingOverlay,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "LoadingOverlay-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <LoadingOverlay {...args} />;

export const DefaultLoadingOverlay = Template.bind({});
DefaultLoadingOverlay.args = {
  testID: testID,
};

export default LoadingOverlayMeta;
