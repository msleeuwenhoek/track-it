import { View, Text } from "react-native";
import PropTypes from "prop-types";
import LabelStyle from "./Label.style";

const Label = (props) => {
  return (
    <View testID={props.testID} style={LabelStyle.View}>
      <Text style={props.additionalClasses}>{props.text}</Text>
    </View>
  );
};

Label.propTypes = {
  testID: PropTypes.string,
};

export default Label;
