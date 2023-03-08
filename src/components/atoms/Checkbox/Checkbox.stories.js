import React from "react";
import Checkbox from "./Checkbox";

const CheckboxMeta = {
  title: "atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Checkbox-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  testID: testID,
};

export default CheckboxMeta;
