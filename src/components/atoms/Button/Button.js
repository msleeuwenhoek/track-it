import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import ButtonStyle from "./Button.style";
import { Icon } from "react-native-elements";
import Label from "../Label/Label";

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      testID={props.testID}
      style={props.style}
    >
      {props.icon ? (
        <Icon
          name={props.icon}
          size={props.size}
          type={props.type}
          color={props.color}
        />
      ) : null}
      {props.text ? (
        <Label
          text={props.text}
          additionalClasses={[ButtonStyle.Text, props.textStyle]}
        />
      ) : null}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  testID: PropTypes.string,
};

export default Button;
