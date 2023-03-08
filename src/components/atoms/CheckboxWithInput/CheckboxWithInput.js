import { useContext } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import CheckboxWithInputStyle from "./CheckboxWithInput.style";
import { CheckBox, Input } from "react-native-elements";
import Label from "../Label/Label";
import * as utilityStyles from "../../../styles/utility.js";
import { FormContext } from "../../../../contexts";

const CheckboxWithInput = (props) => {
  const { formData, setFormData, errors } = useContext(FormContext);

  return (
    <View testID={props.testID} style={CheckboxWithInputStyle.View}>
      <Label
        text={props.text}
        additionalClasses={CheckboxWithInputStyle.InputLabel}
      />
      {props.options.map((option) => {
        return (
          <CheckBox
            key={option}
            checked={props.selected === option ? true : false}
            checkedColor={utilityStyles.colors.colorPrimaryLight}
            onPress={() => {
              props.onPress(option);
            }}
            title={
              <Input
                onFocus={() => {
                  props.onPress(option);
                }}
                maxLength={4}
                value={props.selected === option ? String(formData.amount) : ""}
                placeholder="0"
                keyboardType="numeric"
                inputContainerStyle={CheckboxWithInputStyle.Input}
                containerStyle={CheckboxWithInputStyle.InputContainer}
                rightIcon={
                  <Label
                    text={option}
                    additionalClasses={CheckboxWithInputStyle.InputLabel}
                  />
                }
                onChangeText={(value) => {
                  setFormData((prevState) => ({
                    ...prevState,
                    amount: Number(value),
                  }));
                }}
              />
            }
          />
        );
      })}
    </View>
  );
};

CheckboxWithInput.propTypes = {
  testID: PropTypes.string,
};

export default CheckboxWithInput;
