import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import GoalCompletionScreenStyle from "./GoalCompletionScreen.style";
import GoalOverview from "../../organisms/GoalOverview/GoalOverview";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import { getWeekDates } from "../../../config/GenericFunctions";

const GoalCompletionScreen = (props) => {
  const { selectedDate } = useContext(DatabaseContext);
  const weekDates = getWeekDates(selectedDate);

  return (
    <View testID={props.testID} style={GoalCompletionScreenStyle.View}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={GoalCompletionScreenStyle.Heading}>goal completion</Text>
        <GoalOverview weekDates={weekDates} />
      </ScrollView>
    </View>
  );
};

GoalCompletionScreen.propTypes = {
  testID: PropTypes.string,
};

export default GoalCompletionScreen;
