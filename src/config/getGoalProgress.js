import {
  getWeekDates,
  isSameDate,
  newDate,
  getSelectedCategory,
  getMonthDates,
} from "./GenericFunctions";
import * as utilityStyles from "../styles/utility.js";

function getGoalProgress(goalData, activities, selectedCategory, selectedDate) {
  let progress = 0;
  let amount = 0;
  let goalRelatedActivities = [];

  function filterDailyActivities() {
    goalRelatedActivities = activities.filter((activity) => {
      return (
        activity.data.category === selectedCategory.data.name &&
        isSameDate(newDate(activity.data.date), selectedDate)
      );
    });
  }

  function filterWeeklyActivities() {
    const date = new Date(selectedDate);
    const weekDates = getWeekDates(date);

    goalRelatedActivities = activities.filter((activity) => {
      const thisWeeksActivities = weekDates.filter((weekDate) => {
        return isSameDate(newDate(activity.data.date), weekDate);
      });

      return (
        activity.data.category === selectedCategory.data.name &&
        thisWeeksActivities.length !== 0
      );
    });
  }

  // filter out all the data of the same category as the goal and within the same day/week/month
  if (goalData.data.repetition === "daily") {
    filterDailyActivities();
  } else if (goalData.data.repetition === "weekly") {
    filterWeeklyActivities();
  }

  if (goalData.data.specificity !== "any") {
    goalRelatedActivities = goalRelatedActivities.filter((activity) => {
      return activity.data.subcategory === goalData.data.specificity;
    });
  }

  // set the amount in instances or sum of the activities
  if (goalData.data.measuredBy === "times") {
    amount = goalRelatedActivities.length;
  } else {
    const amountArray = goalRelatedActivities.map((activity) => {
      return activity.data.amount;
    });
    amount = amountArray.reduce((a, b) => a + b, 0);
  }
  if (
    goalData.data.stayBelow !== undefined &&
    goalData.data.stayBelow === true
  ) {
    progress = amount > goalData.data.amount ? 0 : 1;
  } else {
    progress = amount / goalData.data.amount;
    if (progress > 1) {
      progress = 1;
    }
  }

  return {
    progress: progress,
    amount: amount,
    relatedActivities: goalRelatedActivities,
  };
}

function getDateStyles(
  goals,
  activities,
  displayArgs,
  selectedDate,
  categories
) {
  let styleArray = [];
  const monthDates = getMonthDates(selectedDate);

  function getMonthlyProgress(goal) {
    const progressArray = [];
    const selectedCategory = getSelectedCategory(
      categories,
      goal.data.category
    );

    monthDates.map((date) => {
      const goalProgress = getGoalProgress(
        goal,
        activities,
        selectedCategory,
        date
      );
      let color =
        goalProgress.progress >= 1 && goalProgress.relatedActivities.length > 0
          ? utilityStyles.colors.colorHighlight2
          : "transparent";

      let borderColor =
        goal.data.repetition !== "weekly" &&
        goalProgress.relatedActivities.length > 0
          ? utilityStyles.colors.colorHighlight2
          : "transparent";

      if (
        goal.data.stayBelow !== undefined &&
        goal.data.stayBelow === true &&
        goalProgress.progress < 1 &&
        goalProgress.relatedActivities.length > 0 &&
        goalProgress.relatedActivities.find((activity) => {
          return isSameDate(newDate(activity.data.date), date);
        }) !== undefined
      ) {
        borderColor = utilityStyles.colors.colorHighlight7;
      } else if (
        goal.data.repetition === "weekly" &&
        goalProgress.relatedActivities.find((activity) => {
          return isSameDate(newDate(activity.data.date), date);
        }) !== undefined
      ) {
        borderColor = utilityStyles.colors.colorHighlight2;
      }

      let backgroundColor = "transparent";
      let leftRadius = 0;
      let rightRadius = 0;
      if (
        goal.data.repetition === "weekly" &&
        goalProgress.progress >= 1 &&
        goalProgress.relatedActivities.length > 0
      ) {
        backgroundColor = utilityStyles.colors.colorHighlight2;
        if (date.getDay() === 1 || date.getDate() === 1) {
          leftRadius = 20;
        }
        if (date.getDay() === 0 || date.getDate() === monthDates.length) {
          rightRadius = 20;
        }
      }

      progressArray.push({
        date: new Date(date.setHours(0, 0, 0, 0)),
        containerStyle: {
          backgroundColor: backgroundColor,
          borderTopLeftRadius: leftRadius,
          borderBottomLeftRadius: leftRadius,
          borderTopRightRadius: rightRadius,
          borderBottomRightRadius: rightRadius,
          marginVertical: 2,
        },
        style: {
          backgroundColor: color,
          borderWidth: 2,
          borderColor: borderColor,
        },
      });
    });

    return progressArray;
  }

  function createCommonStyle(progressArraysPerGoal) {
    for (let i = 0; i < monthDates.length; i++) {
      const dailyGoalProgresses = [];
      progressArraysPerGoal.map((array) => {
        dailyGoalProgresses.push(array[i].style.backgroundColor);
      });
      const failedGoals = dailyGoalProgresses.filter((color) => {
        return color === "transparent";
      });

      let color =
        failedGoals.length > 0
          ? "transparent"
          : utilityStyles.colors.colorHighlight2;
      let borderColor =
        failedGoals.length < dailyGoalProgresses.length
          ? utilityStyles.colors.colorHighlight2
          : "transparent";

      styleArray.push({
        date: new Date(monthDates[i]),
        style: {
          backgroundColor: color,
          borderWidth: 2,
          borderColor: borderColor,
        },
        containerStyle: { marginVertical: 2 },
      });
    }
  }
  if (goals.length > 0) {
    if (displayArgs.goal === "") {
      const progressArraysPerGoal = [];
      const filteredGoals = goals.filter((goal) => {
        return goal.data.repetition === displayArgs.type;
      });
      if (filteredGoals.length > 0) {
        filteredGoals.map((goal) => {
          progressArraysPerGoal.push(getMonthlyProgress(goal));
        });
        createCommonStyle(progressArraysPerGoal);
      }
    } else {
      styleArray = getMonthlyProgress(displayArgs.goal);
    }
  }
  return styleArray;
}

export { getDateStyles };
export default getGoalProgress;
