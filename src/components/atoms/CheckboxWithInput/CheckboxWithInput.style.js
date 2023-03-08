import * as utilityStyles from "../../../styles/utility.js";

const CheckboxWithInputStyle = {
  View: {},
  InputLabel: {
    color: "#86939e",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  Input: { borderBottomWidth: 0 },
  InputContainer: { width: 170, marginBottom: -30 },
  Error: {
    color: utilityStyles.colors.colorHighlight7,
    marginLeft: 10,
    fontSize: 14,
    marginBottom: 20,
  },
};

export default CheckboxWithInputStyle;
