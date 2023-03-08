import React from "react";
import Button from "./Button";

const ButtonMeta = {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    testID: { table: { disable: true } },
    text: { name: "Text" },
  },
};

const testID = "Button-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  testID: testID,
  text: "Add activity",
};

export default ButtonMeta;
