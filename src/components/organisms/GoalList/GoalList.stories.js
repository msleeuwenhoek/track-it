import React from "react";
import GoalList from "./GoalList";

const GoalListMeta = {
  title: "atoms/GoalList",
  component: GoalList,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "GoalList-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <GoalList {...args} />;

export const DefaultGoalList = Template.bind({});
DefaultGoalList.args = {
  testID: testID,
};

export default GoalListMeta;
