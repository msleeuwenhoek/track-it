import React from "react";
import IconPickerOverlay from "./IconPickerOverlay";

const IconPickerOverlayMeta = {
  title: "atoms/IconPickerOverlay",
  component: IconPickerOverlay,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "IconPickerOverlay-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <IconPickerOverlay {...args} />;

export const DefaultIconPickerOverlay = Template.bind({});
DefaultIconPickerOverlay.args = {
  testID: testID,
};

export default IconPickerOverlayMeta;
