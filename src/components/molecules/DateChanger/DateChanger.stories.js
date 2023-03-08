import React from "react";
import DateChanger from "./DateChanger";

const DateChangerMeta = {
  title: "atoms/DateChanger",
  component: DateChanger,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "DateChanger-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <DateChanger {...args} />;

export const DefaultDateChanger = Template.bind({});
DefaultDateChanger.args = {
  testID: testID,
};

export default DateChangerMeta;
