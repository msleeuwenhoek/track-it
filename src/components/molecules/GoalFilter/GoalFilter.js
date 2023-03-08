import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import GoalFilterStyle from "./GoalFilter.style";
import Button from "../../atoms/Button/Button";
import { getSelectedCategory } from "../../../config/GenericFunctions";
import { DatabaseContext } from "../../../../contexts";
import { useContext } from "react";
import * as utilityStyles from "../../../styles/utility.js";

const GoalFilter = (props) => {
  const { goals, categories } = useContext(DatabaseContext);

  return (
    <View testID={props.testID} style={GoalFilterStyle.View}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={GoalFilterStyle.ScrollView}
      >
        <Button
          text={props.defaultItem}
          style={[
            GoalFilterStyle.Button,
            props.condition === "" && GoalFilterStyle.ButtonActive,
          ]}
          textStyle={[
            GoalFilterStyle.ButtonText,
            props.condition === "" && GoalFilterStyle.ButtonActiveText,
          ]}
          onPress={() => {
            props.onPress("");
          }}
        />
        {goals.map((goal) => {
          const selectedCategory = getSelectedCategory(
            categories,
            goal.data.category
          );
          return (
            <Button
              key={goal.id}
              text={goal.data.name}
              style={[
                GoalFilterStyle.Button,
                {
                  borderColor: selectedCategory.data.themeColor,
                },
                props.condition === goal && {
                  backgroundColor: selectedCategory.data.themeColor,
                },
              ]}
              textStyle={[
                { color: selectedCategory.data.themeColor },
                props.condition === goal && {
                  color: utilityStyles.colors.colorBaseDark,
                },
              ]}
              onPress={() => {
                props.onPress(goal);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

GoalFilter.propTypes = {
  testID: PropTypes.string,
};

export default GoalFilter;
