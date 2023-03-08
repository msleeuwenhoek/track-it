import React from "react";
import Hero from "./Hero";

const HeroMeta = {
  title: "atoms/Hero",
  component: Hero,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Hero-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Hero {...args} />;

export const DefaultHero = Template.bind({});
DefaultHero.args = {
  testID: testID,
};

export default HeroMeta;
