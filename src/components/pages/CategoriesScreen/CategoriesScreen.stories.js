import React from "react";
import CategoriesScreen from "./CategoriesScreen";

const CategoriesScreenMeta = {
  title: "atoms/CategoriesScreen",
  component: CategoriesScreen,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "CategoriesScreen-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CategoriesScreen {...args} />;

export const DefaultCategoriesScreen = Template.bind({});
DefaultCategoriesScreen.args = {
  testID: testID,
};

export default CategoriesScreenMeta;
