import React from "react";
import DynamicInputs from "./DynamicInputs";

const DynamicInputsMeta = {
  title: "atoms/DynamicInputs",
  component: DynamicInputs,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "DynamicInputs-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <DynamicInputs {...args} />;

export const DefaultDynamicInputs = Template.bind({});
DefaultDynamicInputs.args = {
  testID: testID,
};

export default DynamicInputsMeta;
