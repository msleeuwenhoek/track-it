import { View, TouchableOpacity, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import BottomModalStyle from "./BottomModal.style";
import { Overlay } from "react-native-elements";

const BottomModal = (props) => {
  const { width, height } = useWindowDimensions();

  return (
    <View testID={props.testID} style={BottomModalStyle.View}>
      <Overlay
        overlayStyle={BottomModalStyle.Overlay}
        isVisible={props.isVisible}
      >
        <TouchableOpacity
          style={[
            BottomModalStyle.TouchableOpacity,
            { width: width, height: height },
          ]}
          onPress={() => {
            props.setIsVisible(false);
          }}
        ></TouchableOpacity>
        <View style={[BottomModalStyle.OverlayContent]}>{props.child}</View>
      </Overlay>
    </View>
  );
};

BottomModal.propTypes = {
  testID: PropTypes.string,
};

export default BottomModal;
