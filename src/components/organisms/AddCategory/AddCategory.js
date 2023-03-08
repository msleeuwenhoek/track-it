import { View } from "react-native";
import PropTypes from "prop-types";
import AddCategoryStyle from "./AddCategory.style";
import CategoryForm from "../../molecules/CategoryForm/CategoryForm";
import AddHeader from "../../molecules/AddHeader/AddHeader";

const AddCategory = (props) => {
  return (
    <View testID={props.testID} style={AddCategoryStyle.View}>
      <AddHeader
        text={props.page === "Edit" ? "edit category" : "new category"}
      />
      <CategoryForm data={props.data} page={props.page} />
    </View>
  );
};

AddCategory.propTypes = {
  testID: PropTypes.string,
};

export default AddCategory;
