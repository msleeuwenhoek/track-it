import { View } from "react-native";
import PropTypes from "prop-types";
import MoodListStyle from "./MoodList.style";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import { newDate, isSameDate } from "../../../config/GenericFunctions";
import SwipeableDeleteEdit from "../../molecules/SwipeableDeleteEdit/SwipeableDeleteEdit";
import Mood from "../../molecules/Mood";
import Label from "../../atoms/Label/Label";
import * as utilityStyles from "../../../styles/utility.js";
import { Card, Divider } from "react-native-elements";
import Button from "../../atoms/Button/Button";
import { useNavigation } from "@react-navigation/native";

const MoodList = (props) => {
  const { moods, selectedDate } = useContext(DatabaseContext);
  const navigation = useNavigation();

  const moodsOnSelectedDate = [];
  moods.map((mood) => {
    const date = newDate(mood.data.date);
    if (isSameDate(date, selectedDate)) {
      moodsOnSelectedDate.push(mood);
    }
  });
  moodsOnSelectedDate.sort((date1, date2) => date1.data.date - date2.data.date);

  return (
    <View testID={props.testID} style={MoodListStyle.View}>
      {moodsOnSelectedDate.length === 0 ? (
        <Card containerStyle={MoodListStyle.Card}>
          <Label text="mood logs" additionalClasses={MoodListStyle.Heading} />
          <Label
            text="no mood logs to display"
            additionalClasses={MoodListStyle.Text}
          />
          {props.page !== "stats" && (
            <Button
              icon="add-circle"
              color={utilityStyles.colors.colorHighlight2}
              type="ionicon"
              text="add mood log"
              style={MoodListStyle.Button}
              textStyle={MoodListStyle.ButtonText}
              onPress={() => {
                navigation.navigate("Add", { type: "mood" });
              }}
            />
          )}
        </Card>
      ) : (
        <View>
          <Label text="mood logs" additionalClasses={MoodListStyle.Heading} />
          {moodsOnSelectedDate.map((mood, index) => {
            return (
              <View key={mood.id}>
                <Divider width={2} />
                <SwipeableDeleteEdit
                  key={mood.id}
                  collection="moods"
                  type="mood"
                  data={mood}
                  child={<Mood key={index} data={mood} />}
                />
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

MoodList.propTypes = {
  testID: PropTypes.string,
};

export default MoodList;
