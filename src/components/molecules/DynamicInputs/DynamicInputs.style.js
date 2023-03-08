import * as utilityStyles from "../../../styles/utility.js";

const DynamicInputsStyle = {
  View: {},
  InputLabel: {
    color: "#86939e",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  Input: {
    backgroundColor: "#fafafa",
    borderColor: "rgb(237, 237, 237)",
    borderWidth: 1,
    paddingLeft: 8,
  },
  InputContainer: { borderBottomWidth: 0 },
  Button: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: -5,
  },
  AddButton: {
    backgroundColor: utilityStyles.colors.colorHighlight2,
  },
  RemoveButton: { backgroundColor: utilityStyles.colors.colorHighlight7 },
};

export default DynamicInputsStyle;
