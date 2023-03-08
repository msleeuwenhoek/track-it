import * as utilityStyles from "../../../styles/utility.js";

const IconSelectionContainerStyle = {
  View: {
    flexDirection: "row",
  },
  ScrollView: { paddingVertical: 10, marginHorizontal: 5 },
  ButtonContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 5,
    width: 50,
    minHeight: 70,
    paddingTop: 10,
  },
  Button: {
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "transparent",
  },
  ButtonActive: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  Text: {
    textAlign: "center",
    width: 70,
    color: "#86939e",
    fontWeight: "bold",
    fontSize: 16,
  },

  AddButton: {
    marginHorizontal: 5,
    backgroundColor: "#99a4ad",
    borderColor: utilityStyles.colors.colorBaseLight,
    marginTop: 10,
  },
};

export default IconSelectionContainerStyle;
