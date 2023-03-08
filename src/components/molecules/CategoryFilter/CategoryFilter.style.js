import * as utilityStyles from "../../../styles/utility.js";

const CategoryFilterStyle = {
  View: {},
  ScrollView: { marginHorizontal: 10, marginBottom: 10 },

  Button: {
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
    margin: 5,
  },
  ButtonText: { marginLeft: 10 },
  ButtonActiveText: { color: utilityStyles.colors.colorBaseDark },
};

export default CategoryFilterStyle;
