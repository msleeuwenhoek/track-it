import * as utilityStyles from "../../../styles/utility.js";

const GoalListStyle = {
  View: {
    marginTop: 10,
    backgroundColor: utilityStyles.colors.colorPrimaryDark,
    borderRadius: 10,
    padding: 10,
  },
  Heading: {
    color: utilityStyles.colors.colorBaseLight,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  Divider: {
    backgroundColor: utilityStyles.colors.colorBaseLight,
    marginVertical: 10,
  },
  Text: {
    color: utilityStyles.colors.colorBaseLight,
    marginVertical: 20,
    fontSize: 16,
  },
  Button: { alignItems: "flex-start", flexDirection: "row" },
  ButtonText: {
    color: utilityStyles.colors.colorHighlight4,
    fontWeight: "bold",
    marginLeft: 5,
  },
  Subheader: {
    color: utilityStyles.colors.colorPrimaryLight,
    fontSize: 20,
    fontWeight: "bold",
  },
};

export default GoalListStyle;
