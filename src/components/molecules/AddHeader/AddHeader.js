import { View } from "react-native";
import PropTypes from "prop-types";
import AddHeaderStyle from "./AddHeader.style";
import Label from "../../atoms/Label/Label";

const AddHeader = (props) => {
  return (
    <View testID={props.testID} style={AddHeaderStyle.View}>
      <Label text={props.text} additionalClasses={AddHeaderStyle.Heading} />
    </View>
  );
};

AddHeader.propTypes = {
  testID: PropTypes.string,
};

export default AddHeader;
