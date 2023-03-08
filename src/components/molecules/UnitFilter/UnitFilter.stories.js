import React from "react";
import UnitFilter from "./UnitFilter";

const UnitFilterMeta = {
  title: "atoms/UnitFilter",
  component: UnitFilter,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "UnitFilter-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <UnitFilter {...args} />;

export const DefaultUnitFilter = Template.bind({});
DefaultUnitFilter.args = {
  testID: testID,
};

export default UnitFilterMeta;
