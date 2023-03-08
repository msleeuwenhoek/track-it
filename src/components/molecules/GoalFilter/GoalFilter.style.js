import * as utilityStyles from "../../../styles/utility.js";

const GoalFilterStyle = {
  View: {},
  ScrollView: { margin: 20 },

  Button: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
    margin: 5,
    borderColor: utilityStyles.colors.colorHighlight1,
  },
  ButtonText: { color: utilityStyles.colors.colorHighlight1 },
  ButtonActive: {
    backgroundColor: utilityStyles.colors.colorHighlight1,
  },
  ButtonActiveText: { color: utilityStyles.colors.colorBaseDark },
};

export default GoalFilterStyle;
