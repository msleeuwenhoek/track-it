import * as utilityStyles from "../../../styles/utility.js";

const HeaderStyle = {
  View: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  FlexRow: { flexDirection: "row", alignItems: "center" },
  Text: {
    color: utilityStyles.colors.colorBaseLight,
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
  },
  Avatar: {
    backgroundColor: utilityStyles.colors.colorHighlight1,
  },
};

export default HeaderStyle;
