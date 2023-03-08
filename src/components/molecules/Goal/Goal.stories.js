import React from "react";
import Goal from "./Goal";

const GoalMeta = {
  title: "atoms/Goal",
  component: Goal,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Goal-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Goal {...args} />;

export const DefaultGoal = Template.bind({});
DefaultGoal.args = {
  testID: testID,
};

export default GoalMeta;
