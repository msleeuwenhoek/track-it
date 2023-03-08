import React from "react";
import AddActivityForm from "./AddActivityForm";

const AddActivityFormMeta = {
  title: "atoms/AddActivityForm",
  component: AddActivityForm,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "AddActivityForm-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <AddActivityForm {...args} />;

export const DefaultAddActivityForm = Template.bind({});
DefaultAddActivityForm.args = {
  testID: testID,
};

export default AddActivityFormMeta;
