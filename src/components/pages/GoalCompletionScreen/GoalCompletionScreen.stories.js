import React from "react";
import GoalCompletionScreen from "./GoalCompletionScreen";

const GoalCompletionScreenMeta = {
  title: "atoms/GoalCompletionScreen",
  component: GoalCompletionScreen,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID =
  "GoalCompletionScreen-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <GoalCompletionScreen {...args} />;

export const DefaultGoalCompletionScreen = Template.bind({});
DefaultGoalCompletionScreen.args = {
  testID: testID,
};

export default GoalCompletionScreenMeta;
