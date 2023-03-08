import React from "react";
import GraphScreen from "./GraphScreen";

const GraphScreenMeta = {
  title: "atoms/GraphScreen",
  component: GraphScreen,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "GraphScreen-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <GraphScreen {...args} />;

export const DefaultGraphScreen = Template.bind({});
DefaultGraphScreen.args = {
  testID: testID,
};

export default GraphScreenMeta;
