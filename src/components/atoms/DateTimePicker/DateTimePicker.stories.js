import React from "react";
import DateTimePicker from "./DateTimePicker";

const DateTimePickerMeta = {
  title: "atoms/DateTimePicker",
  component: DateTimePicker,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "DateTimePicker-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <DateTimePicker {...args} />;

export const DefaultDateTimePicker = Template.bind({});
DefaultDateTimePicker.args = {
  testID: testID,
};

export default DateTimePickerMeta;
