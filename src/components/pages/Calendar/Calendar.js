import { useContext } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import CalendarStyle from "./Calendar.style";
import CalendarPicker from "react-native-calendar-picker";
import { DatabaseContext } from "../../../../contexts";

const Calendar = ({ route, navigation, testID }) => {
  const { setSelectedDate } = useContext(DatabaseContext);
  const { page } = route.params;
  function selectDate(date) {
    setSelectedDate(date._d);
    navigation.navigate(page);
  }
  return (
    <View testID={testID} style={CalendarStyle.View}>
      <CalendarPicker startFromMonday={true} onDateChange={selectDate} />
    </View>
  );
};

Calendar.propTypes = {
  testID: PropTypes.string,
};

export default Calendar;
