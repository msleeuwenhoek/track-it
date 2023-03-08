import * as utilityStyles from "../../../styles/utility.js";

const AddMoodFormStyle = {
  View: { padding: 20 },
  FlexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Input: {
    minHeight: 100,
    borderWidth: 0,
    color: utilityStyles.colors.colorBaseLight,
  },
  InputContainer: {
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  Error: { color: utilityStyles.colors.colorHighlight7 },
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

export default AddMoodFormStyle;
