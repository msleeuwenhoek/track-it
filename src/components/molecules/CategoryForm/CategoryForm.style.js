import * as utilityStyles from "../../../styles/utility.js";

const CategoryFormStyle = {
  View: { padding: 20 },
  InputLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: "#86939e",
    fontWeight: "bold",
    marginTop: 20,
  },
  Text: { fontSize: 16, marginLeft: 10, fontWeight: "bold" },
  DropdownInput: {
    backgroundColor: "#fafafa",
    borderColor: "rgb(237, 237, 237)",
    borderWidth: 1,
    margin: 10,
  },
  Error: {
    color: utilityStyles.colors.colorHighlight7,
    marginLeft: -1,
    fontSize: 14,
  },
  StandaloneError: { marginLeft: 10 },
  Button: {
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    borderRadius: 20,
    width: 100,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 40,
  },
  ButtonText: { color: utilityStyles.colors.colorBaseLight },
};

export default CategoryFormStyle;
