import { View, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";
import MoodStyle from "./Mood.style";
import * as utilityStyles from "../../../styles/utility.js";
import Label from "../../atoms/Label/Label";
import {
  newDate,
  formattedTime,
  getMood,
} from "../../../config/GenericFunctions";

const Mood = (props) => {
  function getTime() {
    const date = newDate(props.data.data.date);
    return formattedTime(date);
  }

  return (
    <View testID={props.testID} style={[MoodStyle.View, props.style]}>
      <Image
        source={getMood(props.data.data.rating).emoji}
        style={MoodStyle.Emoji}
      />
      <ScrollView>
        <Label
          text={`I felt ${getMood(props.data.data.rating).mood} because ...`}
          additionalClasses={MoodStyle.BoldText}
        />
        <Label text={props.data.data.note} />
      </ScrollView>
      <Label text={getTime()} additionalClasses={MoodStyle.Time} />
    </View>
  );
};

Mood.propTypes = {
  testID: PropTypes.string,
};

export default Mood;
