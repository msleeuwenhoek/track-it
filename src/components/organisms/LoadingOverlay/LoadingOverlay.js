import {
  View,
  useWindowDimensions,
  Modal,
  ActivityIndicator,
} from "react-native";
import PropTypes from "prop-types";
import LoadingOverlayStyle from "./LoadingOverlay.style";
import * as utilityStyles from "../../../styles/utility.js";

const LoadingOverlay = (props) => {
  const { width, height } = useWindowDimensions();
  return (
    <View testID={props.testID} style={LoadingOverlayStyle.View}>
      <Modal visible={props.isVisible} transparent>
        <View
          style={{
            width: width,
            height: height,
            backgroundColor: "rgba(0, 0, 0, 0.4);",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            size="large"
            color={utilityStyles.colors.colorHighlight2}
          />
        </View>
      </Modal>
    </View>
  );
};

LoadingOverlay.propTypes = {
  testID: PropTypes.string,
};

export default LoadingOverlay;
