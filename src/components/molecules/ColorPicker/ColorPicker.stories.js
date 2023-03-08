import React from "react";
import ColorPicker from "./ColorPicker";

const ColorPickerMeta = {
  title: "atoms/ColorPicker",
  component: ColorPicker,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "ColorPicker-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <ColorPicker {...args} />;

export const DefaultColorPicker = Template.bind({});
DefaultColorPicker.args = {
  testID: testID,
};

export default ColorPickerMeta;
