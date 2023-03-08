import React from "react";
import AddGoalForm from "./AddGoalForm";

const AddGoalFormMeta = {
  title: "atoms/AddGoalForm",
  component: AddGoalForm,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "AddGoalForm-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <AddGoalForm {...args} />;

export const DefaultAddGoalForm = Template.bind({});
DefaultAddGoalForm.args = {
  testID: testID,
};

export default AddGoalFormMeta;
