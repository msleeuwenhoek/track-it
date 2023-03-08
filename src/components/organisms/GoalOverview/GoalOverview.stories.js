import React from "react";
import GoalOverview from "./GoalOverview";

const GoalOverviewMeta = {
  title: "atoms/GoalOverview",
  component: GoalOverview,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "GoalOverview-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <GoalOverview {...args} />;

export const DefaultGoalOverview = Template.bind({});
DefaultGoalOverview.args = {
  testID: testID,
};

export default GoalOverviewMeta;
