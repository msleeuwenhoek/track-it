import { View } from "react-native";
import PropTypes from "prop-types";
import ActivityStyle from "./Activity.style";
import Label from "../../atoms/Label/Label";
import { Icon } from "react-native-elements";
import * as utilityStyles from "../../../styles/utility.js";
import {
  formattedTime,
  getSelectedCategory,
  newDate,
} from "../../../config/GenericFunctions";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";

const Activity = (props) => {
  const { categories } = useContext(DatabaseContext);

  const selectedCategory = getSelectedCategory(
    categories,
    props.data.data.category
  );

  function getTime() {
    const date = newDate(props.data.data.date);
    return formattedTime(date);
  }

  return (
    <View
      testID={props.testID}
      style={[
        ActivityStyle.View,
        {
          borderRadius: 10,
          backgroundColor: selectedCategory.data.themeColor,
        },
      ]}
    >
      <Icon
        name={selectedCategory.data.icon.icon}
        size={32}
        type={selectedCategory.data.icon.type}
        color={utilityStyles.colors.colorBaseLight}
      />
      <View style={ActivityStyle.TextContainer}>
        <View style={ActivityStyle.TitleContainer}>
          <Label
            text={
              props.data.data.subcategory !== ""
                ? props.data.data.subcategory
                : props.data.data.category
            }
            additionalClasses={[ActivityStyle.Text, ActivityStyle.TextBold]}
          />
          <Label
            text={`${props.data.data.amount} ${selectedCategory.data.unit}`}
            additionalClasses={ActivityStyle.Text}
          />
        </View>

        <Label
          text={getTime()}
          additionalClasses={[ActivityStyle.Text, ActivityStyle.Time]}
        />
      </View>
    </View>
  );
};

Activity.propTypes = {
  testID: PropTypes.string,
  data: PropTypes.object,
};

export default Activity;
