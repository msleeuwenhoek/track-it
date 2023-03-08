import React from "react";
import AddMood from "./AddMood";

const AddMoodMeta = {
  title: "atoms/AddMood",
  component: AddMood,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "AddMood-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <AddMood {...args} />;

export const DefaultAddMood = Template.bind({});
DefaultAddMood.args = {
  testID: testID,
};

export default AddMoodMeta;
