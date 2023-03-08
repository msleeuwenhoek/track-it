import * as utilityStyles from "../../../styles/utility.js";

const AddActivityFormStyle = {
  View: { padding: 20 },
  InputLabel: {
    color: "#86939e",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
  Error: {
    color: utilityStyles.colors.colorHighlight7,
    marginLeft: -1,
    fontSize: 14,
    marginBottom: 10,
  },

  StandaloneError: { marginLeft: 10 },
  Button: {
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    borderRadius: 20,
    width: 100,
    padding: 10,
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 10,
  },
  ButtonText: { color: utilityStyles.colors.colorBaseLight },
};

export default AddActivityFormStyle;
