import React from "react";
import Emoji from "./Emoji";

const EmojiMeta = {
  title: "atoms/Emoji",
  component: Emoji,
  argTypes: {
    testID: { table: { disable: true } },
  },
};

const testID = "Emoji-" + Math.floor(Math.random() * 90000) + 10000;
const Template = (args) => <Emoji {...args} />;

export const DefaultEmoji = Template.bind({});
DefaultEmoji.args = {
  testID: testID,
};

export default EmojiMeta;
