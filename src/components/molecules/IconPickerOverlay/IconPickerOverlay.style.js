import * as utilityStyles from "../../../styles/utility.js";

const IconPickerOverlayStyle = {
  View: { marginTop: 20 },
  InputLabel: {
    color: "#86939e",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  Button: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    borderColor: "rgb(237, 237, 237)",
    borderWidth: 1,
    marginLeft: 10,
    marginVertical: 10,
  },
  FlexRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  Error: { marginLeft: 10, color: utilityStyles.colors.colorHighlight7 },
};

export default IconPickerOverlayStyle;
