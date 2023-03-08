import { View, Text } from "react-native";
import PropTypes from "prop-types";
import ColorPickerStyle from "./ColorPicker.style";
import Button from "../../atoms/Button/Button";
import * as utilityStyles from "../../../styles/utility.js";

const ColorPicker = (props) => {
  const themeColors = [
    utilityStyles.colors.colorHighlight1,
    utilityStyles.colors.colorHighlight2,
    utilityStyles.colors.colorHighlight3,
    utilityStyles.colors.colorHighlight4,
    utilityStyles.colors.colorHighlight5,
    utilityStyles.colors.colorHighlight6,
    utilityStyles.colors.colorHighlight7,
    utilityStyles.colors.colorHighlight8,
  ];

  return (
    <View testID={props.testID} style={ColorPickerStyle.View}>
      <Text style={ColorPickerStyle.InputLabel}>theme color *</Text>
      <View style={ColorPickerStyle.ColorContainer}>
        {themeColors.map((color) => {
          return (
            <Button
              key={color}
              style={[
                ColorPickerStyle.ColorOption,
                {
                  backgroundColor: color,
                  borderColor:
                    props.color === color
                      ? "red"
                      : utilityStyles.colors.colorBaseLight,
                },
              ]}
              onPress={() => {
                props.onPress(color);
              }}
            />
          );
        })}
      </View>
      <Text style={ColorPickerStyle.Error}>{props.error}</Text>
    </View>
  );
};

ColorPicker.propTypes = {
  testID: PropTypes.string,
};

export default ColorPicker;
