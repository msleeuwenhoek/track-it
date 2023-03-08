import * as utilityStyles from "../../../styles/utility.js";

const ColorPickerStyle = {
  View: { width: 180, marginTop: 20 },
  InputLabel: {
    fontSize: 16,
    marginLeft: 10,
    color: "#86939e",
    fontWeight: "bold",
  },
  ColorContainer: {
    flexDirection: "row",
    marginVertical: 10,
    flexWrap: "wrap",
    height: 80,
  },
  ColorOption: {
    margin: 5,
    width: 30,
    height: 30,
    padding: 10,
    borderRadius: 50,
    borderWidth: 2,
  },
  Error: { marginLeft: 10, color: utilityStyles.colors.colorHighlight7 },
};

export default ColorPickerStyle;
