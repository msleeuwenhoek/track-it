import * as utilityStyles from "../../../styles/utility.js";

const UnitFilterStyle = {
  View: {},
  ScrollView: { marginHorizontal: 10, marginBottom: 10 },

  Button: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
    margin: 5,
    minWidth: 80,
    borderColor: utilityStyles.colors.colorHighlight2,
  },
  ButtonActive: {
    backgroundColor: utilityStyles.colors.colorHighlight2,
  },
  ButtonActiveText: { color: utilityStyles.colors.colorBaseLight },
};

export default UnitFilterStyle;
