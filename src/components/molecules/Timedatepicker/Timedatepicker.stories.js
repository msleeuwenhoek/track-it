import React from "react";
import Timedatepicker from "./Timedatepicker";

const TimedatepickerMeta = {
  title: "atoms/Timedatepicker",
  component: Timedatepicker,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Timedatepicker-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Timedatepicker {...args} />;

export const DefaultTimedatepicker = Template.bind({});
DefaultTimedatepicker.args = {
  testID: testID,
};

export default TimedatepickerMeta;
