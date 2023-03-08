import React from "react";
import Calendar from "./Calendar";

const CalendarMeta = {
  title: "atoms/Calendar",
  component: Calendar,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Calendar-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Calendar {...args} />;

export const DefaultCalendar = Template.bind({});
DefaultCalendar.args = {
  testID: testID,
};

export default CalendarMeta;
