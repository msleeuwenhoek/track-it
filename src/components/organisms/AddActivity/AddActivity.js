import { View } from "react-native";
import PropTypes from "prop-types";
import AddActivityStyle from "./AddActivity.style";
import AddActivityForm from "../../molecules/AddActivityForm/AddActivityForm";
import AddHeader from "../../molecules/AddHeader/AddHeader";

const AddActivity = (props) => {
  return (
    <View testID={props.testID} style={AddActivityStyle.View}>
      <AddHeader
        text={props.page === "Edit" ? "edit activity" : `new activity`}
      />
      <AddActivityForm page={props.page} />
    </View>
  );
};
AddActivity.propTypes = {
  testID: PropTypes.string,
};

export default AddActivity;
