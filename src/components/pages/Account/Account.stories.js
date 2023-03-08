import React from "react";
import Account from "./Account";

const AccountMeta = {
  title: "atoms/Account",
  component: Account,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Account-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Account {...args} />;

export const DefaultAccount = Template.bind({});
DefaultAccount.args = {
  testID: testID,
};

export default AccountMeta;
