import React from "react";
import AddMoodForm from "./AddMoodForm";

const AddMoodFormMeta = {
  title: "atoms/AddMoodForm",
  component: AddMoodForm,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "AddMoodForm-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <AddMoodForm {...args} />;

export const DefaultAddMoodForm = Template.bind({});
DefaultAddMoodForm.args = {
  testID: testID,
};

export default AddMoodFormMeta;
