import { View, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import GoalStyle from "./Goal.style";
import ProgressBar from "react-native-progress/Bar";
import Label from "../../atoms/Label/Label";
import * as utilityStyles from "../../../styles/utility.js";
import { Icon } from "react-native-elements";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import getGoalProgress from "../../../config/getGoalProgress";
import { getSelectedCategory } from "../../../config/GenericFunctions";

const Goal = (props) => {
  const { width } = useWindowDimensions();
  const { categories, activities, selectedDate } = useContext(DatabaseContext);

  const selectedCategory = getSelectedCategory(
    categories,
    props.data.data.category
  );

  return (
    <View testID={props.testID} style={GoalStyle.View}>
      {selectedCategory !== "" ? (
        <View style={GoalStyle.Container}>
          <Icon
            name={selectedCategory.data.icon.icon}
            type={selectedCategory.data.icon.type}
            color={utilityStyles.colors.colorBaseLight}
            size={36}
            style={GoalStyle.Icon}
          />
          <View style={{ justifyContent: "center" }}>
            <Label
              text={props.data.data.name}
              additionalClasses={GoalStyle.BoldText}
            />

            <Label
              text={`${
                getGoalProgress(
                  props.data,
                  activities,
                  selectedCategory,
                  selectedDate
                ).amount
              } / ${props.data.data.amount} ${
                props.data.data.measuredBy === "times"
                  ? ""
                  : selectedCategory.data.unit
              } `}
              additionalClasses={GoalStyle.Progress}
            />
            <ProgressBar
              width={width - 150}
              progress={
                getGoalProgress(
                  props.data,
                  activities,
                  selectedCategory,
                  selectedDate
                ).progress
              }
              color={selectedCategory.data.themeColor}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
};

Goal.propTypes = {
  testID: PropTypes.string,
};

export default Goal;
