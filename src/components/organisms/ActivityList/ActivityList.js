import { View } from "react-native";
import PropTypes from "prop-types";
import ActivityListStyle from "./ActivityList.style";
import Label from "../../atoms/Label/Label";
import * as utilityStyles from "../../../styles/utility.js";
import Activity from "../../molecules//Activity";
import {
  getSelectedCategory,
  isSameDate,
  newDate,
} from "../../../config/GenericFunctions";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import SwipeableDeleteEdit from "../../molecules/SwipeableDeleteEdit/SwipeableDeleteEdit";
import CompiledActivity from "../../molecules/CompiledActivity/CompiledActivity";
import Button from "../../atoms/Button/Button";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const ActivityList = (props) => {
  const { categories, activities, selectedDate } = useContext(DatabaseContext);
  let activitiesOnSelectedDate = [];
  const navigation = useNavigation();
  activities.map((activity) => {
    const date = newDate(activity.data.date);
    if (isSameDate(date, selectedDate)) {
      activitiesOnSelectedDate.push(activity);
    }
  });

  activitiesOnSelectedDate.sort(
    (date1, date2) => date1.data.date - date2.data.date
  );

  const timedActivities = activitiesOnSelectedDate.filter((activity) => {
    const category = getSelectedCategory(categories, activity.data.category);
    return category.data.unit === "minutes" || category.data.unit === "hours";
  });

  const untimedActivities = activitiesOnSelectedDate.filter((activity) => {
    const category = getSelectedCategory(categories, activity.data.category);
    return category.data.unit !== "minutes" && category.data.unit !== "hours";
  });

  return (
    <View testID={props.testID} style={ActivityListStyle.View}>
      {activitiesOnSelectedDate.length === 0 && (
        <Card containerStyle={ActivityListStyle.Card}>
          <Label
            text="activities"
            additionalClasses={ActivityListStyle.Heading}
          />
          <Label
            text="no daily activities to display"
            additionalClasses={{ fontSize: 16 }}
          />
          {props.page !== "stats" && (
            <Button
              icon="add-circle"
              color={utilityStyles.colors.colorHighlight3}
              type="ionicon"
              text="add activity"
              textColor={utilityStyles.colors.colorHighlight3}
              style={ActivityListStyle.Button}
              textStyle={ActivityListStyle.ButtonText}
              onPress={() => {
                navigation.navigate("Add", { type: "activity" });
              }}
            />
          )}
        </Card>
      )}
      {timedActivities.length > 0 && (
        <View style={{ marginVertical: 5 }}>
          <Label
            text="timed activities"
            additionalClasses={ActivityListStyle.Heading}
          />

          {timedActivities.map((activity, index) => {
            return (
              <SwipeableDeleteEdit
                key={activity.id}
                collection="activities"
                type="activity"
                data={activity}
                child={<Activity key={index} data={activity} />}
              />
            );
          })}
        </View>
      )}
      {untimedActivities.length > 0 && (
        <View style={{ marginVertical: 5 }}>
          <Label
            text="untimed activities"
            additionalClasses={ActivityListStyle.Heading}
          />
          {categories.map((category, index) => {
            const activitiesPerCategory = untimedActivities.filter(
              (activity) => {
                return category.data.name === activity.data.category;
              }
            );
            if (activitiesPerCategory.length > 0) {
              return (
                <CompiledActivity
                  key={category.id}
                  category={category}
                  activities={activitiesPerCategory}
                />
              );
            }
          })}
        </View>
      )}
    </View>
  );
};

ActivityList.propTypes = {
  testID: PropTypes.string,
};

export default ActivityList;
