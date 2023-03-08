import React from "react";
import Label from "./Label";
import * as utilityStyles from "../../../styles/utility.js";

const LabelMeta = {
  title: "atoms/Label",
  component: Label,
  argTypes: {
    testID: { table: { disable: true } },
    size: { name: "Size" },
    additionalClasses: { name: "AdditionalClasses" },
  },
};

const testID = "Label-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  testID: testID,
  text: "This is a label",
  additionalClasses: {
    color: utilityStyles.colors.colorBaseDark,
    fontWeight: "bold",
    fontSize: 16,
  },
};

export default LabelMeta;
