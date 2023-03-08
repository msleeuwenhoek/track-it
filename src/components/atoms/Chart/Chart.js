import { useContext } from "react";
import { useWindowDimensions, View } from "react-native";
import PropTypes from "prop-types";
import ChartStyle from "./Chart.style";
import * as utilityStyles from "../../../styles/utility.js";
import { ChartContext, DatabaseContext } from "../../../../contexts";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryScatter,
} from "victory-native";
import Emoji from "../Emoji/Emoji";
import { getActivityData, getMoodData } from "../../../config/getChartData";
import { getMonthDates } from "../../../config/GenericFunctions";

const Chart = (props) => {
  const { activities, moods, categories, selectedDate } =
    useContext(DatabaseContext);
  const { width } = useWindowDimensions();
  const { dataType, subcategory, timespan } = useContext(ChartContext);

  const monthDates = getMonthDates(selectedDate);
  const moodData =
    timespan === "week"
      ? getMoodData(moods, props.weekDates, timespan)
      : getMoodData(moods, monthDates, timespan);

  const activityData =
    timespan === "week"
      ? getActivityData(
          activities,
          props.weekDates,
          categories,
          dataType,
          subcategory,
          timespan
        )
      : getActivityData(
          activities,
          monthDates,
          categories,
          dataType,
          subcategory,
          timespan
        );

  if (activityData.isLoaded && moodData.isLoaded) {
    return (
      <View testID={props.testID} style={ChartStyle.View}>
        <VictoryChart
          width={width}
          domainPadding={{ x: 10 }}
          domain={{ y: [0, 1] }}
        >
          {activityData.dataSet !== null && timespan === "month" && (
            <VictoryAxis
              dependentAxis
              tickValues={[0.25, 0.5, 0.75, 1]}
              tickFormat={(t, index) =>
                activityData.dataSet !== null ? t * activityData.dataSet.max : t
              }
              style={{
                axis: { stroke: utilityStyles.colors.colorBaseLight },
                axisLabel: {
                  padding: 35,
                  fill: utilityStyles.colors.colorBaseLight,
                },
                tickLabels: { fill: utilityStyles.colors.colorBaseLight },
              }}
            />
          )}
          <VictoryAxis
            tickValues={
              timespan === "week"
                ? ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
                : monthDates.map((date) => {
                    if (date.getDate() % 3 == 0) {
                      return date.getDate();
                    } else {
                      return 0;
                    }
                  })
            }
            style={{
              axis: { stroke: utilityStyles.colors.colorBaseLight },
              tickLabels: {
                fill: ({ tick }) =>
                  tick === 0
                    ? "transparent"
                    : utilityStyles.colors.colorBaseLight,
              },
            }}
          />

          {activityData.dataSet !== null && (
            <VictoryBar
              data={activityData.dataSet.data}
              y={(datum) => datum.y / activityData.dataSet.max}
              cornerRadius={timespan === "week" ? 5 : 0}
              labels={({ datum }) =>
                timespan === "week" && datum.y !== 0 ? datum.y : ""
              }
              style={{
                data: {
                  fill: activityData.selectedCategory.data.themeColor,
                },
                labels: { fill: utilityStyles.colors.colorBaseLight },
              }}
            />
          )}

          <VictoryScatter
            data={props.showMood ? moodData.chart.data : []}
            dataComponent={<Emoji />}
            y={(datum) => datum.y / moodData.chart.max}
          />
        </VictoryChart>
      </View>
    );
  } else {
    return null;
  }
};

Chart.propTypes = {
  testID: PropTypes.string,
};

export default Chart;
