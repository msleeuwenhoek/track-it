import React from "react";
import CheckboxWithInput from "./CheckboxWithInput";

const CheckboxWithInputMeta = {
  title: "atoms/CheckboxWithInput",
  component: CheckboxWithInput,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "CheckboxWithInput-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CheckboxWithInput {...args} />;

export const DefaultCheckboxWithInput = Template.bind({});
DefaultCheckboxWithInput.args = {
  testID: testID,
};

export default CheckboxWithInputMeta;
