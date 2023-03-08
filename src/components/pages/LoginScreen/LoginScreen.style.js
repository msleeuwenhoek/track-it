import * as utilityStyles from "../../../styles/utility.js";

const LoginScreenStyle = {
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
  Error: {
    color: utilityStyles.colors.colorHighlight7,
    alignSelf: "flex-start",
    marginLeft: -1,
  },
  Input: { color: utilityStyles.colors.colorBaseLight },
  Button: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    width: 100,
  },
  ButtonFill: { backgroundColor: utilityStyles.colors.colorHighlight2 },
  ButtonText: { color: utilityStyles.colors.colorBaseLight, fontSize: 16 },
  Link: { marginTop: 20, opacity: 0.8 },
};

export default LoginScreenStyle;
