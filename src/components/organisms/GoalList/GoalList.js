import { View } from "react-native";
import PropTypes from "prop-types";
import GoalListStyle from "./GoalList.style";
import Goal from "../../molecules/Goal/Goal";
import Label from "../../atoms/Label/Label";
import * as utilityStyles from "../../../styles/utility.js";
import { Divider } from "react-native-elements";
import SwipeableDeleteEdit from "../../molecules/SwipeableDeleteEdit/SwipeableDeleteEdit";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import Button from "../../atoms/Button/Button";
import { useNavigation } from "@react-navigation/native";

const GoalList = (props) => {
  const types = ["daily", "weekly"];
  const { goals } = useContext(DatabaseContext);
  const navigation = useNavigation();

  return (
    <View testID={props.testID} style={GoalListStyle.View}>
      <Label text="goals" additionalClasses={GoalListStyle.Heading} />
      <Divider style={GoalListStyle.Divider} />
      {goals.length === 0 ? (
        <View>
          <Label
            text="create a new goal to start tracking"
            additionalClasses={GoalListStyle.Text}
          />
          <Button
            icon="add-circle"
            color={utilityStyles.colors.colorHighlight4}
            type="ionicon"
            text="add goal"
            style={GoalListStyle.Button}
            textStyle={GoalListStyle.ButtonText}
            onPress={() => {
              navigation.navigate("Add", { type: "goal" });
            }}
          />
        </View>
      ) : (
        types.map((type) => {
          const filteredGoals = goals.filter((goal) => {
            return goal.data.repetition === type;
          });

          return (
            filteredGoals.length !== 0 && (
              <View key={type}>
                <Label
                  text={type}
                  additionalClasses={GoalListStyle.Subheader}
                />

                {filteredGoals.map((goal) => {
                  return (
                    <SwipeableDeleteEdit
                      key={goal.id}
                      collection="goals"
                      data={goal}
                      type="goal"
                      child={<Goal key={goal.id} data={goal} />}
                    />
                  );
                })}
              </View>
            )
          );
        })
      )}
    </View>
  );
};

GoalList.propTypes = {
  testID: PropTypes.string,
};

export default GoalList;
