import { View } from "react-native";
import PropTypes from "prop-types";
import CompiledActivityStyle from "./CompiledActivity.style";
import { ListItem, Icon } from "react-native-elements";
import Activity from "../Activity";
import SwipeableDeleteEdit from "../SwipeableDeleteEdit/SwipeableDeleteEdit";
import * as utilityStyles from "../../../styles/utility.js";
import Label from "../../atoms/Label/Label";
import { useState } from "react";

const CompiledActivity = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const amounts = props.activities.map((activity) => {
    return activity.data.amount;
  });
  const total = amounts.reduce((a, b) => a + b, 0);

  return (
    <View testID={props.testID} style={CompiledActivityStyle.View}>
      <ListItem.Accordion
        containerStyle={[
          CompiledActivityStyle.AccordionContainer,
          {
            backgroundColor: props.category.data.themeColor,
          },
        ]}
        underlayColor="transparent"
        noIcon
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
        content={
          <ListItem.Content>
            <View style={CompiledActivityStyle.AccordionInnerContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  name={props.category.data.icon.icon}
                  size={32}
                  type={props.category.data.icon.type}
                  color={utilityStyles.colors.colorBaseLight}
                />

                <View style={CompiledActivityStyle.TextContainer}>
                  <Label
                    text={props.category.data.name}
                    additionalClasses={[
                      CompiledActivityStyle.Text,
                      CompiledActivityStyle.TextBold,
                    ]}
                  />
                  <Label
                    text={`${total} ${props.category.data.unit}`}
                    additionalClasses={CompiledActivityStyle.Text}
                  />
                </View>
              </View>
              <Icon
                name={isExpanded ? "chevron-down" : "chevron-forward"}
                size={32}
                type="ionicon"
                color={utilityStyles.colors.colorBaseLight}
              />
            </View>
          </ListItem.Content>
        }
        isExpanded={isExpanded}
      >
        {isExpanded &&
          props.activities.map((activity, index) => {
            return (
              <View style={{ marginLeft: 20 }} key={activity.id}>
                <SwipeableDeleteEdit
                  collection="activities"
                  type="activity"
                  data={activity}
                  child={<Activity key={index} data={activity} />}
                />
              </View>
            );
          })}
      </ListItem.Accordion>
    </View>
  );
};

CompiledActivity.propTypes = {
  testID: PropTypes.string,
};

export default CompiledActivity;
