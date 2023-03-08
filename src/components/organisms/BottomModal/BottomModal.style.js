import * as utilityStyles from "../../../styles/utility.js";

const BottomModalStyle = {
  View: {},
  Overlay: {
    backgroundColor: "transparent",
    position: "relative",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    padding: 0,
  },
  TouchableOpacity: { position: "absolute" },
  OverlayContent: {
    backgroundColor: utilityStyles.colors.colorBaseLight,
    paddingHorizontal: 20,
    paddingVertical: 50,
    width: "100%",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    height: 500,
  },
};

export default BottomModalStyle;
