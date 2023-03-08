import * as utilityStyles from "../../../styles/utility.js";

const ActivityListStyle = {
  View: { marginVertical: 20 },
  Card: {
    margin: 0,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.7)",
    padding: 10,
  },
  Heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  Button: {
    alignItems: "flex-start",
    marginTop: 20,
    fontWeight: "bold",
    flexDirection: "row",
  },
  ButtonText: {
    color: utilityStyles.colors.colorHighlight3,
    fontWeight: "bold",
    marginLeft: 5,
  },
};

export default ActivityListStyle;
