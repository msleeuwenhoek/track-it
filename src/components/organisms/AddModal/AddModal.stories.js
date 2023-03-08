import React from "react";
import AddModal from "./AddModal";

const AddModalMeta = {
  title: "atoms/AddModal",
  component: AddModal,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "AddModal-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <AddModal {...args} />;

export const DefaultAddModal = Template.bind({});
DefaultAddModal.args = {
  testID: testID,
};

export default AddModalMeta;
