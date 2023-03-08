import React from "react";
import CategoryList from "./CategoryList";

const CategoryListMeta = {
  title: "atoms/CategoryList",
  component: CategoryList,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "CategoryList-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CategoryList {...args} />;

export const DefaultCategoryList = Template.bind({});
DefaultCategoryList.args = {
  testID: testID,
};

export default CategoryListMeta;
