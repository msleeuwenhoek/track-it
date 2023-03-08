import React from "react";
import LoadingScreen from "./LoadingScreen";

const LoadingScreenMeta = {
  title: "atoms/LoadingScreen",
  component: LoadingScreen,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "LoadingScreen-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <LoadingScreen {...args} />;

export const DefaultLoadingScreen = Template.bind({});
DefaultLoadingScreen.args = {
  testID: testID,
};

export default LoadingScreenMeta;
