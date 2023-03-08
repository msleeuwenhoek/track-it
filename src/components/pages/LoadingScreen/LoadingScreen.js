import { View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import LoadingScreenStyle from "./LoadingScreen.style";
import * as utilityStyles from "../../../styles/utility.js";

const LoadingScreen = (props) => {
  return (
    <View testID={props.testID} style={LoadingScreenStyle.View}>
      <ActivityIndicator
        size="large"
        color={utilityStyles.colors.colorHighlight2}
      />
    </View>
  );
};

LoadingScreen.propTypes = {
  testID: PropTypes.string,
};

export default LoadingScreen;
