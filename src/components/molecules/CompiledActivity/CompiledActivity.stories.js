import React from "react";
import CompiledActivity from "./CompiledActivity";

const CompiledActivityMeta = {
  title: "atoms/CompiledActivity",
  component: CompiledActivity,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "CompiledActivity-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CompiledActivity {...args} />;

export const DefaultCompiledActivity = Template.bind({});
DefaultCompiledActivity.args = {
  testID: testID,
};

export default CompiledActivityMeta;
