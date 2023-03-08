import * as utilityStyles from "../../../styles/utility.js";

const ConfigureAccountStyle = {
  View: {
    backgroundColor: utilityStyles.colors.colorPrimaryDark,
    height: "100%",
    padding: 20,
  },
  ScrollView: { justifyContent: "center", alignItems: "center" },
  Heading: {
    fontSize: 38,
    color: utilityStyles.colors.colorHighlight1,
    fontWeight: "bold",
    marginTop: 40,
  },
  Text: {
    color: utilityStyles.colors.colorBaseLight,
    fontSize: 16,
    textAlign: "center",
    marginVertical: 20,
  },
  TextBold: { fontWeight: "bold", fontSize: 20 },
  Button: {
    width: 120,
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: utilityStyles.colors.colorHighlight2,
    marginTop: 50,
  },
  SkipButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 20,
  },
  ButtonText: { color: utilityStyles.colors.colorBaseLight, fontSize: 16 },
  Overlay: { marginHorizontal: 20, padding: 10 },
};

export default ConfigureAccountStyle;
