import React from "react";
import Home from "./Home";

const HomeMeta = {
  title: "atoms/Home",
  component: Home,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Home-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Home {...args} />;

export const DefaultHome = Template.bind({});
DefaultHome.args = {
  testID: testID,
};

export default HomeMeta;
