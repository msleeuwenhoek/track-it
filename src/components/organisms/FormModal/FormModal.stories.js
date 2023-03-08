import React from "react";
import FormModal from "./FormModal";

const FormModalMeta = {
  title: "atoms/FormModal",
  component: FormModal,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "FormModal-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <FormModal {...args} />;

export const DefaultFormModal = Template.bind({});
DefaultFormModal.args = {
  testID: testID,
};

export default FormModalMeta;
