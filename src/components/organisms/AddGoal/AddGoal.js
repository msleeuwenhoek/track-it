import { View } from "react-native";
import PropTypes from "prop-types";
import AddGoalStyle from "./AddGoal.style";
import AddGoalForm from "../../molecules/AddGoalForm/AddGoalForm";
import AddHeader from "../../molecules/AddHeader/AddHeader";

const AddGoal = (props) => {
  return (
    <View testID={props.testID} style={AddGoalStyle.View}>
      <AddHeader text={props.page === "Edit" ? "edit goal" : `new goal`} />
      <AddGoalForm page={props.page} />
    </View>
  );
};

AddGoal.propTypes = {
  testID: PropTypes.string,
};

export default AddGoal;
