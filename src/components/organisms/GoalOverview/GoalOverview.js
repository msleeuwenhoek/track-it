import { View } from "react-native";
import PropTypes from "prop-types";
import GoalOverviewStyle from "./GoalOverview.style";
import { useContext, useState } from "react";
import { DatabaseContext } from "../../../../contexts";
import CalendarPicker from "react-native-calendar-picker";
import { getDateStyles } from "../../../config/getGoalProgress";
import * as utilityStyles from "../../../styles/utility.js";
import GoalOverviewStats from "../../molecules/GoalOverviewStats/GoalOverviewStats";
import FilterScroll from "../../molecules/GoalFilter/GoalFilter";

const GoalOverview = (props) => {
  const { goals, categories, activities, selectedDate, setSelectedDate } =
    useContext(DatabaseContext);
  const [displayArgs, setDisplayArgs] = useState({ type: "daily", goal: "" });

  const customDatesStyles = getDateStyles(
    goals,
    activities,
    displayArgs,
    selectedDate,
    categories
  );

  return (
    <View testID={props.testID} style={GoalOverviewStyle.View}>
      <FilterScroll
        defaultItem="all daily goals"
        items={goals}
        condition={displayArgs.goal}
        onPress={(goal) => {
          setDisplayArgs({
            goal: goal,
            type: goal !== "" ? goal.data.repetition : "daily",
          });
        }}
      />
      <CalendarPicker
        initialDate={selectedDate}
        startFromMonday={true}
        textStyle={GoalOverviewStyle.CalendarText}
        todayTextStyle={{ color: utilityStyles.colors.colorBaseLight }}
        onMonthChange={(date) => {
          setSelectedDate(date._d);
        }}
        enableDateChange={false}
        customDatesStyles={customDatesStyles}
      />
      {displayArgs.type === "daily" && (
        <GoalOverviewStats
          customDatesStyles={customDatesStyles}
          displayArgs={displayArgs}
        />
      )}
    </View>
  );
};

GoalOverview.propTypes = {
  testID: PropTypes.string,
};

export default GoalOverview;
