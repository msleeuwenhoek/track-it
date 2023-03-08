import React from "react";
import Form from "./Form";

const FormMeta = {
  title: "atoms/Form",
  component: Form,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Form-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Form {...args} />;

export const DefaultAddActivity = Template.bind({});
DefaultForm.args = {
  testID: testID,
};

export default FormMeta;
