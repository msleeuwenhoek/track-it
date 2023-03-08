import * as utilityStyles from "../../../styles/utility.js";

const MoodStyle = {
  View: {
    backgroundColor: utilityStyles.colors.colorBaseLight,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    marginVertical: 5,
  },
  Emoji: { width: 40, height: 40, marginRight: 10 },
  BoldText: {
    color: utilityStyles.colors.colorBaseDark,
    fontWeight: "bold",
  },
  Time: {
    color: utilityStyles.colors.colorBaseDark,
    fontWeight: "regular",
    fontSize: 16,
    opacity: 0.5,
    marginLeft: 30,
  },
};

export default MoodStyle;
