import * as utilityStyles from "../../../styles/utility.js";

const DateTimePickerStyle = {
  View: {},
  Container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#fafafa",
    borderColor: "rgb(237, 237, 237)",
    borderWidth: 1,
    padding: 10,
  },
  Text: {
    color: utilityStyles.colors.colorBaseDark,
    fontSize: 16,
  },
  Button: { paddingRight: 10 },
};

export default DateTimePickerStyle;
