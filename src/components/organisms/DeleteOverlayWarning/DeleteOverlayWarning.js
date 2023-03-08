import { View, Text, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import DeleteOverlayWarningStyle from "./DeleteOverlayWarning.style";
import deleteFromDatabase, {
  deleteAllFromDatabase,
} from "../../../../hooks/deleteFromDatabase";
import Button from "../../atoms/Button/Button";
import { useNavigation } from "@react-navigation/native";
import Label from "../../atoms/Label/Label";
import { Divider, Icon } from "react-native-elements";
import { useState, useContext, useEffect } from "react";
import { DatabaseContext } from "../../../../contexts";
import getData from "../../../../hooks/getData";

const DeleteOverlayWarning = (props) => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { user, activities, goals, setCategories } =
    useContext(DatabaseContext);

  const relatedActivities = activities.filter((activity) => {
    return activity.data.category === props.category.data.name;
  });
  const relatedGoals = goals.filter((goal) => {
    return goal.data.category === props.category.data.name;
  });

  async function deleteCategory() {
    await deleteAllFromDatabase(user, "activities", props.category);
    await deleteAllFromDatabase(user, "goals", props.category);
    await deleteFromDatabase(user, "categories", props.category.id);
    const newCategories = await getData(user.uid, "categories");
    setCategories(newCategories);
  }

  useEffect(() => {
    if (props.isVisible === false) {
      setLoading(false);
    }
  }, [props.isVisible]);

  return (
    <View testID={props.testID} style={DeleteOverlayWarningStyle.View}>
      {loading ? (
        <View style={DeleteOverlayWarningStyle.LoadingContainer}>
          <ActivityIndicator size={50} />
        </View>
      ) : (
        <View>
          <View>
            <View style={DeleteOverlayWarningStyle.HeadingContainer}>
              <Icon
                name={props.category.data.icon.icon}
                type={props.category.data.icon.type}
                raised
                reverse
                color={props.category.data.themeColor}
              />
              <Label
                text={`delete "${props.category.data.name}" ?`}
                additionalClasses={DeleteOverlayWarningStyle.BoldText}
              />
            </View>
            <Divider style={DeleteOverlayWarningStyle.Divider} />
            <Label
              text="all related activities and goals will be deleted as well!"
              additionalClasses={DeleteOverlayWarningStyle.Text}
            />
            <View style={DeleteOverlayWarningStyle.FlexRow}>
              <View style={DeleteOverlayWarningStyle.CountContainer}>
                <Text
                  style={[
                    DeleteOverlayWarningStyle.Count,
                    { color: props.category.data.themeColor },
                  ]}
                >
                  {relatedGoals.length}
                </Text>
                <Text
                  style={[
                    DeleteOverlayWarningStyle.Text,
                    DeleteOverlayWarningStyle.TextLight,
                  ]}
                >
                  related goals
                </Text>
              </View>
              <View style={DeleteOverlayWarningStyle.CountContainer}>
                <Text
                  style={[
                    DeleteOverlayWarningStyle.Count,
                    { color: props.category.data.themeColor },
                  ]}
                >
                  {relatedActivities.length}
                </Text>
                <Text
                  style={[
                    DeleteOverlayWarningStyle.Text,
                    DeleteOverlayWarningStyle.TextLight,
                  ]}
                >
                  related activities
                </Text>
              </View>
            </View>
          </View>
          <View style={DeleteOverlayWarningStyle.ButtonContainer}>
            <Button
              text="cancel"
              onPress={() => {
                props.setIsVisible(false);
              }}
              style={[
                DeleteOverlayWarningStyle.Button,
                DeleteOverlayWarningStyle.ButtonCancel,
              ]}
              textStyle={DeleteOverlayWarningStyle.ButtonText}
            />
            <Button
              text="delete"
              style={[
                DeleteOverlayWarningStyle.Button,
                DeleteOverlayWarningStyle.ButtonDelete,
              ]}
              textStyle={DeleteOverlayWarningStyle.ButtonText}
              onPress={async function () {
                setLoading(true);
                await deleteCategory();

                props.setIsVisible(false);
                navigation.navigate("Home");
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
};

DeleteOverlayWarning.propTypes = {
  testID: PropTypes.string,
};

export default DeleteOverlayWarning;
