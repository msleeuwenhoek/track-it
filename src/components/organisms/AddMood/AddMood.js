import { View } from "react-native";
import PropTypes from "prop-types";
import AddMoodStyle from "./AddMood.style";
import AddHeader from "../../molecules/AddHeader/AddHeader";
import AddMoodForm from "../../molecules/AddMoodForm/AddMoodForm";

const AddMood = (props) => {
  return (
    <View testID={props.testID} style={AddMoodStyle.View}>
      <AddHeader
        text={
          props.page === "Edit" ? "edit mood log" : `new mood update for today`
        }
      />
      <AddMoodForm page={props.page} />
    </View>
  );
};

AddMood.propTypes = {
  testID: PropTypes.string,
};

export default AddMood;
