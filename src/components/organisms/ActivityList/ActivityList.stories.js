import React from "react";
import ActivityList from "./ActivityList";

const ActivityListMeta = {
  title: "atoms/ActivityList",
  component: ActivityList,
  argTypes: {
    testID: { table: { disable: true } },
    text: { name: "Text" },
  },
};

const testID = "ActivityList-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <ActivityList {...args} />;

export const DefaultActivityList = Template.bind({});
DefaultActivityList.args = {
  testID: testID,
};

export default ActivityListMeta;
