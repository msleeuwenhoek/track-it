import * as utilityStyles from "../../../styles/utility.js";

const MoodPickerStyle = {
  View: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 20,
  },
  Emoji: { width: 40, height: 40 },
  Button: { padding: 1, borderRadius: 30 },
  ButtonActive: { backgroundColor: utilityStyles.colors.colorPrimaryLight },
};

export default MoodPickerStyle;
