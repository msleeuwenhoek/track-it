import { View, Text, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import GoalOverviewStatsStyle from "./GoalOverviewStats.style";
import * as utilityStyles from "../../../styles/utility.js";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import { getDateStyles } from "../../../config/getGoalProgress";
import moment from "moment";
import { isSameDate } from "../../../config/GenericFunctions";

const GoalOverviewStats = (props) => {
  const { width } = useWindowDimensions();
  const { goals, activities, categories, selectedDate } =
    useContext(DatabaseContext);
  const completedGoals = props.customDatesStyles.filter((style) => {
    return style.style.backgroundColor === utilityStyles.colors.colorHighlight2;
  });
  const completionPercentage =
    goals.length > 0 && props.customDatesStyles.length > 0
      ? Math.round(
          (completedGoals.length / props.customDatesStyles.length) * 100
        )
      : 0;

  const currentMonthStyles = getDateStyles(
    goals,
    activities,
    props.displayArgs,
    new Date(),
    categories
  );

  function getStreak() {
    if (currentMonthStyles.length === 0) {
      return 0;
    }
    const todaysStyle = currentMonthStyles.find((style) => {
      return isSameDate(style.date, new Date());
    });
    let streak = 0;
    let reachedTheEnd = true;
    let i = 0;
    let dateLimit =
      todaysStyle.style.backgroundColor === utilityStyles.colors.colorHighlight2
        ? new Date()
        : moment(new Date()).subtract(1, "day");
    while (reachedTheEnd) {
      const previousDate = moment(new Date()).subtract(i, "months");
      let previousMonthStyles = getDateStyles(
        goals,
        activities,
        props.displayArgs,
        previousDate,
        categories
      );
      previousMonthStyles.reverse();
      if (i === 0) {
        previousMonthStyles = previousMonthStyles.filter((style) => {
          return new Date(style.date) < dateLimit;
        });
      }
      for (let i = 0; i < previousMonthStyles.length; i++) {
        if (
          previousMonthStyles[i].style.backgroundColor ===
          utilityStyles.colors.colorHighlight2
        ) {
          streak++;
        } else {
          reachedTheEnd = false;
          break;
        }
      }
      i++;
    }

    return streak;
  }

  return (
    <View testID={props.testID} style={GoalOverviewStatsStyle.View}>
      <View
        style={[GoalOverviewStatsStyle.Column, { width: (width - 200) / 2 }]}
      >
        <Text style={GoalOverviewStatsStyle.LargeText}>{getStreak()}</Text>
        <View>
          <Text style={GoalOverviewStatsStyle.Text}>current</Text>
          <Text style={GoalOverviewStatsStyle.Text}>streak</Text>
        </View>
      </View>
      <View style={[GoalOverviewStatsStyle.Column]}>
        <Text style={GoalOverviewStatsStyle.LargeText}>
          {completionPercentage}%
        </Text>
        <View>
          <Text style={GoalOverviewStatsStyle.Text}>completed</Text>
          <Text style={GoalOverviewStatsStyle.Text}>
            {completedGoals.length} / {props.customDatesStyles.length} days
          </Text>
        </View>
      </View>
    </View>
  );
};

GoalOverviewStats.propTypes = {
  testID: PropTypes.string,
};

export default GoalOverviewStats;
