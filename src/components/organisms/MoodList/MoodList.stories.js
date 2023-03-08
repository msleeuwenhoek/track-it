import React from "react";
import MoodList from "./MoodList";

const MoodListMeta = {
  title: "atoms/MoodList",
  component: MoodList,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "MoodList-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <MoodList {...args} />;

export const DefaultMoodList = Template.bind({});
DefaultMoodList.args = {
  testID: testID,
};

export default MoodListMeta;
