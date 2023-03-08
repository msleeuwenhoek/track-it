import React from "react";
import AddCategory from "./AddCategory";

const AddCategoryMeta = {
  title: "atoms/AddCategory",
  component: AddCategory,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "AddCategory-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <AddCategory {...args} />;

export const DefaultAddCategory = Template.bind({});
DefaultAddCategory.args = {
  testID: testID,
};

export default AddCategoryMeta;
