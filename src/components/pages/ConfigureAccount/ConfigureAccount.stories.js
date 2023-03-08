import React from "react";
import ConfigureAccount from "./ConfigureAccount";

const ConfigureAccountMeta = {
  title: "atoms/ConfigureAccount",
  component: ConfigureAccount,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "ConfigureAccount-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <ConfigureAccount {...args} />;

export const DefaultConfigureAccount = Template.bind({});
DefaultConfigureAccount.args = {
  testID: testID,
};

export default ConfigureAccountMeta;
