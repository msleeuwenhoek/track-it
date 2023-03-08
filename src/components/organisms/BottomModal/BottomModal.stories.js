import React from "react";
import BottomModal from "./BottomModal";

const BottomModalMeta = {
  title: "atoms/BottomModal",
  component: BottomModal,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "BottomModal-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <BottomModal {...args} />;

export const DefaultBottomModal = Template.bind({});
DefaultBottomModal.args = {
  testID: testID,
};

export default BottomModalMeta;
