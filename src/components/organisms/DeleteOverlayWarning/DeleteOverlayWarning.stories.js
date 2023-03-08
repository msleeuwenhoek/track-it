import React from "react";
import DeleteOverlayWarning from "./DeleteOverlayWarning";

const DeleteOverlayWarningMeta = {
  title: "atoms/DeleteOverlayWarning",
  component: DeleteOverlayWarning,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID =
  "DeleteOverlayWarning-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <DeleteOverlayWarning {...args} />;

export const DefaultDeleteOverlayWarning = Template.bind({});
DefaultDeleteOverlayWarning.args = {
  testID: testID,
};

export default DeleteOverlayWarningMeta;
