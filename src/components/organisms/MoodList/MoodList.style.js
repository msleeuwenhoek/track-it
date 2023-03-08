import * as utilityStyles from "../../../styles/utility.js";

const MoodListStyle = {
  View: { paddingBottom: 30 },
  Card: {
    margin: 0,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
  },
  Heading: {
    color: utilityStyles.colors.colorBaseDark,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  Text: { fontSize: 16 },
  Button: { alignItems: "flex-start", marginTop: 20, flexDirection: "row" },
  ButtonText: {
    color: utilityStyles.colors.colorHighlight2,
    fontWeight: "bold",
    marginLeft: 5,
  },
};

export default MoodListStyle;
