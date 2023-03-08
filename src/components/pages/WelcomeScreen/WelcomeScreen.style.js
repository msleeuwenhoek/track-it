import * as utilityStyles from "../../../styles/utility.js";

const WelcomeScreenStyle = {
  View: {
    backgroundColor: utilityStyles.colors.colorPrimaryDark,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  Heading: {
    fontSize: 38,
    color: utilityStyles.colors.colorHighlight1,
    fontWeight: "bold",
    marginBottom: 40,
  },
  Button: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    width: 100,
  },
  ButtonOutline: {
    borderWidth: 2,
    borderColor: utilityStyles.colors.colorHighlight2,
  },
  ButtonFill: { backgroundColor: utilityStyles.colors.colorHighlight2 },
  ButtonText: { color: utilityStyles.colors.colorBaseLight, fontSize: 16 },
};

export default WelcomeScreenStyle;
