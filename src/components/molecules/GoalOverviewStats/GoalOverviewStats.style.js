import * as utilityStyles from "../../../styles/utility.js";

const GoalOverviewStatsStyle = {
  View: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  Column: {
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  Text: { color: utilityStyles.colors.colorBaseLight, fontSize: 14 },
  LargeText: { fontSize: 45, color: utilityStyles.colors.colorHighlight2 },
};

export default GoalOverviewStatsStyle;
