import { useContext, useState } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import DateTimePickerStyle from "./DateTimePicker.style";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import * as utilityStyles from "../../../styles/utility.js";
import { FormContext, DatabaseContext } from "../../../../contexts";
import Label from "../Label/Label";
import Button from "../Button/Button";

const DateTimePicker = (props) => {
  const [showPicker, setShowPicker] = useState(false);
  const { setFormData, formData } = useContext(FormContext);
  const { selectedDate, setSelectedDate } = useContext(DatabaseContext);

  return (
    <View testID={props.testID} style={DateTimePickerStyle.View}>
      <View style={DateTimePickerStyle.Container}>
        <Button
          icon={props.mode === "date" ? "calendar" : "time"}
          size={32}
          type="ionicon"
          style={DateTimePickerStyle.Button}
          color={utilityStyles.colors.colorBaseDark}
          onPress={() => {
            setShowPicker(true);
          }}
        />
        <Label text={props.text} additionalClasses={DateTimePickerStyle.Text} />
      </View>
      {showPicker && (
        <RNDateTimePicker
          mode={props.mode}
          value={new Date(selectedDate)}
          onChange={(selectedDate) => {
            setShowPicker(false);

            const date = new Date(selectedDate.nativeEvent.timestamp);
            const newDate = formData.date;

            if (props.mode === "date") {
              newDate.setMonth(date.getMonth());
              newDate.setDate(date.getDate());
              newDate.setFullYear(date.getFullYear());
            } else {
              newDate.setHours(date.getHours());
              newDate.setMinutes(date.getMinutes());
            }
            setSelectedDate(newDate);
            setFormData((prevState) => ({
              ...prevState,
              date: newDate,
            }));
          }}
        />
      )}
    </View>
  );
};

DateTimePicker.propTypes = {
  testID: PropTypes.string,
};

export default DateTimePicker;
