import { useContext } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import TimedatepickerStyle from "./Timedatepicker.style";
import DateTimePicker from "../../atoms/DateTimePicker/DateTimePicker";
import { formattedTime, formattedDate } from "../../../config/GenericFunctions";
import { FormContext } from "../../../../contexts";
const Timedatepicker = (props) => {
  const { formData } = useContext(FormContext);

  const datePickerArray = [
    {
      labelText: "date:",
      mode: "date",
      pickerText: formattedDate(formData.date),
    },
    {
      labelText: "time:",
      mode: "time",
      pickerText: formattedTime(formData.date),
    },
  ];

  return (
    <View testID={props.testID} style={TimedatepickerStyle.View}>
      {datePickerArray.map((component) => {
        return (
          <View key={component.mode}>
            <DateTimePicker mode={component.mode} text={component.pickerText} />
          </View>
        );
      })}
    </View>
  );
};

Timedatepicker.propTypes = {
  testID: PropTypes.string,
};

export default Timedatepicker;
