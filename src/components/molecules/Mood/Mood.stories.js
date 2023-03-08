import React from "react";
import Mood from "./Mood";

const MoodMeta = {
  title: "atoms/Mood",
  component: Mood,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Mood-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Mood {...args} />;

export const DefaultMood = Template.bind({});
DefaultMood.args = {
  testID: testID,
};

export default MoodMeta;
