import React from "react";
import AddHeader from "./AddHeader";

const AddHeaderMeta = {
  title: "atoms/AddHeader",
  component: AddHeader,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "AddHeader-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <AddHeader {...args} />;

export const DefaultAddHeader = Template.bind({});
DefaultAddHeader.args = {
  testID: testID,
};

export default AddHeaderMeta;
