import * as utilityStyles from "../../../styles/utility.js";

const AddGoalFormStyle = {
  View: { padding: 20 },
  InputLabel: {
    color: "#86939e",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  DropdownInput: {
    backgroundColor: "#fafafa",
    borderColor: "rgb(237, 237, 237)",
    borderWidth: 1,
    margin: 10,
  },
  CheckBoxContainer: {
    backgroundColor: "transparent",
    borderWidth: 0,
    marginLeft: 20,
    paddingTop: 0,
  },
  CheckBoxText: { color: "#86939e" },
  Button: {
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    borderRadius: 20,
    width: 100,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 30,
  },
  Error: {
    color: utilityStyles.colors.colorHighlight7,
    marginLeft: -1,
    fontSize: 14,
    marginBottom: 10,
  },
  StandaloneError: { marginLeft: 10, marginBottom: 20 },
  ButtonText: { color: utilityStyles.colors.colorBaseLight },
};

export default AddGoalFormStyle;
