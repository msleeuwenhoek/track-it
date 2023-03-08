import React from "react";
import AddGoal from "./AddGoal";

const AddGoalMeta = {
  title: "atoms/AddGoal",
  component: AddGoal,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "AddGoal-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <AddGoal {...args} />;

export const DefaultAddGoal = Template.bind({});
DefaultAddGoal.args = {
  testID: testID,
};

export default AddGoalMeta;
