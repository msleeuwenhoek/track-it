import * as utilityStyles from "../../../styles/utility.js";

const DeleteOverlayWarningStyle = {
  LoadingContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  HeadingContainer: { alignItems: "center" },
  BoldText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  Divider: { marginVertical: 15 },
  Text: {
    fontSize: 18,
    marginBottom: 20,
  },
  TextLight: { color: utilityStyles.colors.colorBaseLight },
  FlexRow: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: utilityStyles.colors.colorPrimaryLight,
    borderRadius: 10,
  },
  CountContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    paddingTop: 10,
  },
  Count: {
    fontSize: 40,
    fontWeight: "bold",
  },
  ButtonContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  Button: {
    borderWidth: 1,
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
    width: "50%",
  },

  ButtonCancel: {
    marginRight: 20,
    borderColor: utilityStyles.colors.colorPrimaryLight,
  },
  ButtonDelete: {
    borderColor: utilityStyles.colors.colorHighlight7,
    backgroundColor: utilityStyles.colors.colorHighlight7,
  },
};

export default DeleteOverlayWarningStyle;
