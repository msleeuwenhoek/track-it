import React from "react";
import Chart from "./Chart";

const ChartMeta = {
  title: "atoms/Chart",
  component: Chart,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Chart-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Chart {...args} />;

export const DefaultChart = Template.bind({});
DefaultChart.args = {
  testID: testID,
};

export default ChartMeta;
