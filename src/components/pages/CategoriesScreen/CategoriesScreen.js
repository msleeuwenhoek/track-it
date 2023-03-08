import { View, Text, ScrollView } from "react-native";
import PropTypes from "prop-types";
import CategoriesScreenStyle from "./CategoriesScreen.style";
import CategoryList from "../../organisms/CategoryList/CategoryList";

const CategoriesScreen = (props) => {
  return (
    <View testID={props.testID} style={CategoriesScreenStyle.View}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={CategoriesScreenStyle.Heading}>categories</Text>
        <View style={CategoriesScreenStyle.Container}>
          <Text style={CategoriesScreenStyle.Text}>
            add, edit or delete categories you would like to track
          </Text>
          <CategoryList />
        </View>
      </ScrollView>
    </View>
  );
};

CategoriesScreen.propTypes = {
  testID: PropTypes.string,
};

export default CategoriesScreen;
