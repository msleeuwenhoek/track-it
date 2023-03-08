import React from "react";
import CategoryForm from "./CategoryForm";

const CategoryFormMeta = {
  title: "atoms/CategoryForm",
  component: CategoryForm,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "CategoryForm-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CategoryForm {...args} />;

export const DefaultCategoryForm = Template.bind({});
DefaultCategoryForm.args = {
  testID: testID,
};

export default CategoryFormMeta;
