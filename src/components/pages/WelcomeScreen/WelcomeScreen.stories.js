import React from "react";
import WelcomeScreen from "./WelcomeScreen";

const WelcomeScreenMeta = {
  title: "atoms/WelcomeScreen",
  component: WelcomeScreen,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "WelcomeScreen-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <WelcomeScreen {...args} />;

export const DefaultWelcomeScreen = Template.bind({});
DefaultWelcomeScreen.args = {
  testID: testID,
};

export default WelcomeScreenMeta;
