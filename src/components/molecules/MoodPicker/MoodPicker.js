import { View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import MoodPickerStyle from "./MoodPicker.style";
import Bad from "../../../images/white_frowning_face.png";
import Good from "../../../images/slightly_smiling_face.png";
import Great from "../../../images/grin.png";
import Meh from "../../../images/neutral_face.png";
import Sob from "../../../images/sob.png";
import Smiley from "../../../images/smiley.png";

const MoodPicker = (props) => {
  const emojis = [Sob, Bad, Meh, Good, Smiley, Great];

  return (
    <View testID={props.testID} style={MoodPickerStyle.View}>
      {emojis.map((emoji, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={[
              MoodPickerStyle.Button,
              props.active === index + 1 && MoodPickerStyle.ButtonActive,
            ]}
            onPress={() => {
              props.onPress(index + 1);
            }}
          >
            <Image source={emoji} style={MoodPickerStyle.Emoji} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

MoodPicker.propTypes = {
  testID: PropTypes.string,
};

export default MoodPicker;
