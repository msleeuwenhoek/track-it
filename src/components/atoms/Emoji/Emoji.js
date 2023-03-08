import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import EmojiStyle from "./Emoji.style";
import { getMood } from "../../../config/GenericFunctions";

const Emoji = ({ testID, x, y, datum }) => {
  const mood = getMood(datum.y);

  return (
    <View testID={testID} style={EmojiStyle.View}>
      <Text
        style={{
          top: y,
          left: x - 10,
          fontSize: 30,
          display: datum.y === 0 ? "none" : "flex",
        }}
      >
        <Image source={mood.emoji} style={EmojiStyle.Image} />
      </Text>
    </View>
  );
};

Emoji.propTypes = {
  testID: PropTypes.string,
};

export default Emoji;
