import React from "react";
import Activity from "./Activity";

const dummyData = [
  {
    data: {
      title: "drink water",
      icon: "md-water-outline",
      unit: "ml",
      amount: 2000,
    },
    id: "6X4LImdZpmgA4chxPitw",
  },
  {
    data: {
      icon: "book-outline",
      category: "study",
      date: { seconds: 1672301100, nanoseconds: 713000000 },
      amount: 40,
      unit: "minutes",
      isTimed: "true",
    },
    id: "qhNJuAmXtISu5IQzvdaV",
  },
];

const ActivityMeta = {
  title: "atoms/Activity",
  component: Activity,
  argTypes: {
    testID: { table: { disable: true } },
    data: { name: "Data" },
    type: { name: "Type" },
  },
};

const testID = "Activity-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Activity {...args} />;

export const DefaultActivity = Template.bind({});
DefaultActivity.args = {
  testID: testID,
  data: dummyData[0],
};

export default ActivityMeta;
