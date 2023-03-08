import React from "react";
import LoginScreen from "./LoginScreen";

const LoginScreenMeta = {
  title: "atoms/LoginScreen",
  component: LoginScreen,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "LoginScreen-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <LoginScreen {...args} />;

export const DefaultLoginScreen = Template.bind({});
DefaultLoginScreen.args = {
  testID: testID,
};

export default LoginScreenMeta;
