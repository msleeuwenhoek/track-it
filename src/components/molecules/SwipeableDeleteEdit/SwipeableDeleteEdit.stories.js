import React from "react";
import SwipeableDeleteEdit from "./SwipeableDeleteEdit";

const SwipeableDeleteEditMeta = {
  title: "atoms/SwipeableDeleteEdit",
  component: SwipeableDeleteEdit,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID =
  "SwipeableDeleteEdit-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <SwipeableDeleteEdit {...args} />;

export const DefaultSwipeableDeleteEdit = Template.bind({});
DefaultSwipeableDeleteEdit.args = {
  testID: testID,
};

export default SwipeableDeleteEditMeta;
