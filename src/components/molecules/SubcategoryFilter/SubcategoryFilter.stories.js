import React from "react";
import SubcategoryFilter from "./SubcategoryFilter";

const SubcategoryFilterMeta = {
  title: "atoms/SubcategoryFilter",
  component: SubcategoryFilter,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "SubcategoryFilter-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <SubcategoryFilter {...args} />;

export const DefaultSubcategoryFilter = Template.bind({});
DefaultSubcategoryFilter.args = {
  testID: testID,
};

export default SubcategoryFilterMeta;
