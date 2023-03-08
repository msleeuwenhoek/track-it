import * as utilityStyles from "../../../styles/utility.js";

const ChartContainerStyle = {
  View: {},
  Container: { marginVertical: 5, marginHorizontal: 5 },
  Button: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 10,
    backgroundColor: utilityStyles.colors.colorHighlight1,
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    alignSelf: "center",
    marginTop: 20,
  },
  ButtonText: {
    marginLeft: 5,
  },
  HeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    paddingVertical: 10,
    marginVertical: 10,
  },
  TimespanButton: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: utilityStyles.colors.colorPrimaryDark,
    borderRadius: 10,
  },
  TimespanButtonText: {
    color: utilityStyles.colors.colorBaseLight,
    fontSize: 20,
  },
  Heading: {
    textAlign: "center",
    color: utilityStyles.colors.colorBaseLight,
    fontSize: 28,
  },
  DateChanger: {
    margin: 20,
    borderRadius: 25,
    marginTop: -20,
  },
  Divider: { marginVertical: 10 },
  MoodActive: {
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    width: 50,
    borderRadius: 40,
  },
  MoodContainer: { marginHorizontal: 15, position: "absolute", right: 0 },
  Image: { width: 30, height: 30, margin: 10 },
  Text: {
    color: utilityStyles.colors.colorBaseLight,
    textAlign: "center",
    fontSize: 24,
  },
  TitleConfigContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  CalendarButton: { marginHorizontal: 15, marginVertical: 10 },
};

export default ChartContainerStyle;
