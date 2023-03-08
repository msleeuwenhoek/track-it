import React from "react";
import GoalOverviewStats from "./GoalOverviewStats";

const GoalOverviewStatsMeta = {
  title: "atoms/GoalOverviewStats",
  component: GoalOverviewStats,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "GoalOverviewStats-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <GoalOverviewStats {...args} />;

export const DefaultGoalOverviewStats = Template.bind({});
DefaultGoalOverviewStats.args = {
  testID: testID,
};

export default GoalOverviewStatsMeta;
