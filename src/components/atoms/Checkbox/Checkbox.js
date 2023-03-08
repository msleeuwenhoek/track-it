import { useContext } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import CheckboxStyle from "./Checkbox.style";
import { CheckBox } from "react-native-elements";
import * as utilityStyles from "../../../styles/utility.js";
import { FormContext } from "../../../../contexts";
import Label from "../Label/Label";

const Checkbox = (props) => {
  const { errors } = useContext(FormContext);

  return (
    <View testID={props.testID} style={CheckboxStyle.View}>
      <Label text={props.text} additionalClasses={CheckboxStyle.InputLabel} />
      {props.options.map((option) => {
        return (
          <CheckBox
            key={option}
            title={option}
            checked={props.selected === option ? true : false}
            checkedColor={utilityStyles.colors.colorPrimaryLight}
            onPress={() => {
              props.onPress(option);
            }}
          />
        );
      })}
      <Text style={CheckboxStyle.Error}>{props.error}</Text>
    </View>
  );
};

Checkbox.propTypes = {
  testID: PropTypes.string,
};

export default Checkbox;
