import React from "react";
import GoalFilter from "./GoalFilter";

const GoalFilterMeta = {
  title: "atoms/GoalFilter",
  component: GoalFilter,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "GoalFilter-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <GoalFilter {...args} />;

export const DefaultGoalFilter = Template.bind({});
DefaultGoalFilter.args = {
  testID: testID,
};

export default GoalFilterMeta;
