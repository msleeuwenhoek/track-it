import React from "react";
import ChartContainer from "./ChartContainer";

const ChartContainerMeta = {
  title: "atoms/ChartContainer",
  component: ChartContainer,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "ChartContainer-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <ChartContainer {...args} />;

export const DefaultChartContainer = Template.bind({});
DefaultChartContainer.args = {
  testID: testID,
};

export default ChartContainerMeta;
