import React from "react";
import RegistrationScreen from "./RegistrationScreen";

const RegistrationScreenMeta = {
  title: "atoms/RegistrationScreen",
  component: RegistrationScreen,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID =
  "RegistrationScreen-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <RegistrationScreen {...args} />;

export const DefaultRegistrationScreen = Template.bind({});
DefaultRegistrationScreen.args = {
  testID: testID,
};

export default RegistrationScreenMeta;
