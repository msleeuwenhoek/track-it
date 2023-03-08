import { getSelectedCategory, newDate, isSameDate } from "./GenericFunctions";
import { weekdayNames } from "./dates";

function getDailyActivity(activities, category, weekDate, subcategory) {
  const activityAmounts = [];
  activities.map((activity) => {
    if (subcategory === "") {
      if (
        isSameDate(newDate(activity.data.date), weekDate) &&
        activity.data.category === category.data.name
      ) {
        // add the data for each activity on that day to an array
        activityAmounts.push(activity.data.amount);
      }
    } else {
      if (
        isSameDate(newDate(activity.data.date), weekDate) &&
        activity.data.category === category.data.name &&
        activity.data.subcategory === subcategory
      ) {
        // add the data for each activity on that day to an array
        activityAmounts.push(activity.data.amount);
      }
    }
  });

  let sumOfActivity =
    activityAmounts.length > 0 ? activityAmounts.reduce((a, b) => a + b, 0) : 0;

  return sumOfActivity;
}

function determineMaxvalue(weekData, category) {
  const maxValue = Math.max(...weekData.map((d) => d.y));
  let defaultMax = 10;
  if (category.data.unit === "ml" || category.data.unit === "kcal") {
    defaultMax = 2000;
  }
  if (category.data.unit === "minutes" || category.data.unit === "grams") {
    defaultMax = 40;
  }
  if (
    category.data.unit === "hours" ||
    category.data.unit === "kg" ||
    category.data.unit === "liters" ||
    category.data.unit === "instances"
  ) {
    defaultMax = 8;
  }
  const max = maxValue < defaultMax ? defaultMax : maxValue;
  return max;
}

function getWeeklyActivity(
  activities,
  category,
  weekDates,
  subcategory,
  timespan
) {
  const weekData = weekDates.map((weekDate) => {
    const data = {
      x:
        timespan === "week"
          ? weekdayNames[weekDate.getDay()]
          : weekDate.getDate(),
      y: getDailyActivity(activities, category, weekDate, subcategory),
    };
    return data;
  });

  return weekData;
}

function getActivityData(
  activities,
  weekDates,
  categories,
  dataType,
  subcategory,
  timespan
) {
  let isLoaded = false;
  let dataSet = null;

  if (
    dataType === "" ||
    getSelectedCategory(categories, dataType) === undefined
  ) {
    isLoaded = true;
    return { isLoaded, dataSet };
  } else {
    const selectedCategory = getSelectedCategory(categories, dataType);
    const categoryData = getWeeklyActivity(
      activities,
      selectedCategory,
      weekDates,
      subcategory,
      timespan
    );
    const max = determineMaxvalue(categoryData, selectedCategory);

    dataSet = { data: categoryData, max: max, category: selectedCategory };

    isLoaded = true;
    return { isLoaded, dataSet, selectedCategory };
  }
}

function getMoodData(moods, weekDates, timespan) {
  let moodData = [];
  let isLoaded = false;

  weekDates.map((weekDate) => {
    const moodsArray = [];

    //select all the mood ratings for this day
    moods.map((mood) => {
      if (isSameDate(newDate(mood.data.date), weekDate)) {
        moodsArray.push(mood.data.rating);
      }
    });

    const averageMood =
      moodsArray.reduce((a, b) => a + b, 0) / moodsArray.length;

    //push the data for this day into the data array for the whole selected week
    moodData.push({
      x:
        timespan === "week"
          ? weekdayNames[weekDate.getDay()]
          : weekDate.getDate(),
      y: moodsArray.length > 0 ? averageMood : 0,
    });

    isLoaded = true;
  });

  const chart = {
    data: moodData,
    max: 6,
  };

  return {
    isLoaded,
    chart: chart,
  };
}

export { getActivityData, getMoodData };
