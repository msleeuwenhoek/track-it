import React from "react";
import MoodPicker from "./MoodPicker";

const MoodPickerMeta = {
  title: "atoms/MoodPicker",
  component: MoodPicker,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "MoodPicker-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <MoodPicker {...args} />;

export const DefaultMoodPicker = Template.bind({});
DefaultMoodPicker.args = {
  testID: testID,
};

export default MoodPickerMeta;
