import React from "react";
import Add from "./Add";

const AddMeta = {
  title: "atoms/Add",
  component: Add,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Add-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Add {...args} />;

export const DefaultAdd = Template.bind({});
DefaultAdd.args = {
  testID: testID,
};

export default AddMeta;
