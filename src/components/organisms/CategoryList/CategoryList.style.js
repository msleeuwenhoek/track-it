import * as utilityStyles from "../../../styles/utility.js";

const CategoryListStyle = {
  View: { marginTop: 10, width: "100%" },
  FlexRow: { flexDirection: "row", flexWrap: "wrap" },
  Text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  Button: {
    alignItems: "flex-start",
    marginTop: 20,
    fontWeight: "bold",
    flexDirection: "row",
  },
  ButtonText: {
    color: utilityStyles.colors.colorHighlight2,
    fontWeight: "bold",
    marginLeft: 5,
  },
  ExitButton: { position: "absolute", top: 0, right: 0, margin: 5 },

  Category: {
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    justifyContent: "center",
    alignItems: "center",
    height: 120,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
};

export default CategoryListStyle;
