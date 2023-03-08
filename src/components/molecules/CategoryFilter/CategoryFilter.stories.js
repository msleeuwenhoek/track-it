import React from "react";
import CategoryFilter from "./CategoryFilter";

const CategoryFilterMeta = {
  title: "atoms/CategoryFilter",
  component: CategoryFilter,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "CategoryFilter-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <CategoryFilter {...args} />;

export const DefaultCategoryFilter = Template.bind({});
DefaultCategoryFilter.args = {
  testID: testID,
};

export default CategoryFilterMeta;
