import { View, ScrollView, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import AddStyle from "./Add.style";
import AddGoal from "../../organisms/AddGoal/AddGoal";
import AddActivity from "../../organisms/AddActivity";
import { FormProvider } from "../../../../contexts/FormContext";
import AddMood from "../../organisms/AddMood/AddMood";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import AddCategory from "../../organisms/AddCategory/AddCategory";

const Add = (props) => {
  const { action, type, data } = props.route.params;
  const { height } = useWindowDimensions();
  const { selectedDate } = useContext(DatabaseContext);
  return (
    <View testID={props.testID} style={[AddStyle.View, { minHeight: height }]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <FormProvider type={type} selectedDate={selectedDate} data={data}>
          {type === "activity" && <AddActivity page={action} />}
          {type === "goal" && <AddGoal page={action} />}
          {type === "mood" && <AddMood page={action} />}
          {type === "category" && <AddCategory page={action} data={data} />}
        </FormProvider>
      </ScrollView>
    </View>
  );
};

Add.propTypes = {
  testID: PropTypes.string,
};

export default Add;
