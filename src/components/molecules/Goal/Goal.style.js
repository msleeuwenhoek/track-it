import * as utilityStyles from "../../../styles/utility.js";

const GoalStyle = {
  View: { width: "100%", marginVertical: 10 },
  Progress: {
    color: utilityStyles.colors.colorBaseLight,
    fontSize: 16,
    marginVertical: 5,
    paddingRight: 20,
  },
  Icon: {
    marginRight: 15,
    padding: 15,
    width: 70,
    borderRadius: 10,
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
  },
  BoldText: {
    color: utilityStyles.colors.colorBaseLight,
    fontWeight: "bold",
    fontSize: 16,
  },
  Container: {
    flexDirection: "row",
    marginBottom: 10,
    backgroundColor: utilityStyles.colors.colorPrimaryDark,
  },
};

export default GoalStyle;
