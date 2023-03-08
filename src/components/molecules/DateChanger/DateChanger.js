import { View } from "react-native";
import PropTypes from "prop-types";
import DateChangerStyle from "./DateChanger.style";
import Button from "../../atoms/Button/Button";
import { useContext, useState } from "react";
import { DatabaseContext } from "../../../../contexts";
import CalendarPicker from "react-native-calendar-picker";
import BottomModal from "../../organisms/BottomModal/BottomModal";

const DateChanger = (props) => {
  const { selectedDate, setSelectedDate } = useContext(DatabaseContext);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View testID={props.testID} style={[DateChangerStyle.View, props.style]}>
      <Button
        size={24}
        type="ionicon"
        color={props.color}
        icon="chevron-back-outline"
        style={DateChangerStyle.Button}
        onPress={() => {
          if (props.switchType === "month") {
            selectedDate.setDate(1);
          }
          setSelectedDate(
            props.switchType === "month"
              ? new Date(selectedDate.setMonth(selectedDate.getMonth() - 1))
              : new Date(
                  selectedDate.setDate(selectedDate.getDate() - props.interval)
                )
          );
        }}
      />
      <Button
        text={props.text}
        textStyle={DateChangerStyle.Text}
        onPress={() => {
          setIsVisible(true);
        }}
      />

      <Button
        icon="chevron-forward-outline"
        size={24}
        type="ionicon"
        color={props.color}
        style={DateChangerStyle.Button}
        onPress={() => {
          if (props.switchType === "month") {
            selectedDate.setDate(1);
          }

          setSelectedDate(
            props.switchType === "month"
              ? new Date(selectedDate.setMonth(selectedDate.getMonth() + 1))
              : new Date(
                  selectedDate.setDate(selectedDate.getDate() + props.interval)
                )
          );
        }}
      />
      <BottomModal
        isVisible={isVisible}
        setIsVisible={() => {
          setIsVisible(false);
        }}
        child={
          <CalendarPicker
            initialDate={selectedDate}
            startFromMonday={true}
            onDateChange={(date) => {
              setSelectedDate(date._d);
              setIsVisible(false);
            }}
          />
        }
      />
    </View>
  );
};

DateChanger.propTypes = {
  testID: PropTypes.string,
};

export default DateChanger;
