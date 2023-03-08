import { View, Animated } from "react-native";
import PropTypes from "prop-types";
import SwipeableDeleteEditStyle from "./SwipeableDeleteEdit.style";
import { Swipeable } from "react-native-gesture-handler";
import Button from "../../atoms/Button/Button";
import deleteFromDatabase from "../../../../hooks/deleteFromDatabase";
import * as utilityStyles from "../../../styles/utility.js";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { DatabaseContext } from "../../../../contexts";
import getData from "../../../../hooks/getData";
import LoadingOverlay from "../../organisms/LoadingOverlay/LoadingOverlay";

const SwipeableDeleteEdit = (props) => {
  const [showLoading, setShowLoading] = useState(false);

  const { user, setGoals, setActivities, setMoods, setIsLoaded } =
    useContext(DatabaseContext);

  const navigation = useNavigation();
  const swipeRight = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <View>
        <Animated.View
          style={{
            height: "100%",
            marginLeft: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            transform: [{ translateX: trans }],
          }}
        >
          <Button
            icon="trash-o"
            type="font-awesome"
            color={utilityStyles.colors.colorHighlight1}
            style={{ padding: 10 }}
            onPress={async () => {
              setShowLoading(true);
              deleteFromDatabase(user, props.collection, props.data.id);
              const newData = await getData(user.uid, props.collection);

              if (props.collection === "goals") {
                setGoals(newData);
              }
              if (props.collection === "activities") {
                setActivities(newData);
              }
              if (props.collection === "moods") {
                setMoods(newData);
              }
              setShowLoading(false);
              navigation.navigate("Home");
            }}
          />
          <Button
            icon="pencil"
            type="octicon"
            color={utilityStyles.colors.colorHighlight2}
            onPress={() => {
              navigation.navigate("Add", {
                action: "Edit",
                type: props.type,
                data: props.data,
              });
            }}
          />
        </Animated.View>
      </View>
    );
  };
  return (
    <View testID={props.testID} style={SwipeableDeleteEditStyle.View}>
      <Swipeable renderRightActions={swipeRight}>{props.child}</Swipeable>
      <LoadingOverlay isVisible={showLoading} />
    </View>
  );
};

SwipeableDeleteEdit.propTypes = {
  testID: PropTypes.string,
};

export default SwipeableDeleteEdit;
