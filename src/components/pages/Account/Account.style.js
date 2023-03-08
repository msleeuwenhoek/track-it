import * as utilityStyles from "../../../styles/utility.js";

const AccountStyle = {
  View: {
    padding: 20,
    backgroundColor: utilityStyles.colors.colorPrimaryDark,
    height: "100%",
  },
  Divider: { marginVertical: 20 },
  Text: {
    color: utilityStyles.colors.colorBaseLight,
    fontSize: 18,
  },
  BoldText: {
    color: utilityStyles.colors.colorBaseLight,
    fontSize: 28,
    fontWeight: "bold",
  },
  FlexRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "100%",
  },
};

export default AccountStyle;
