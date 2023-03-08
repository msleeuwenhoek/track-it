import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import CategoryFilterStyle from "./CategoryFilter.style";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import Button from "../../atoms/Button/Button";
import * as utilityStyles from "../../../styles/utility.js";

const CategoryFilter = (props) => {
  const { categories } = useContext(DatabaseContext);
  return (
    <View testID={props.testID} style={CategoryFilterStyle.View}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={CategoryFilterStyle.ScrollView}
      >
        {categories.map((category) => {
          return (
            <Button
              icon={category.data.icon.icon}
              type={category.data.icon.type}
              color={
                props.condition === category.data.name
                  ? utilityStyles.colors.colorBaseDark
                  : category.data.themeColor
              }
              key={category.id}
              text={category.data.name}
              style={[
                CategoryFilterStyle.Button,
                { borderColor: category.data.themeColor },
                props.condition === category.data.name && {
                  backgroundColor: category.data.themeColor,
                },
              ]}
              textStyle={[
                { color: category.data.themeColor },
                CategoryFilterStyle.ButtonText,
                props.condition === category.data.name &&
                  CategoryFilterStyle.ButtonActiveText,
              ]}
              onPress={() => {
                props.onPress(category.data.name);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

CategoryFilter.propTypes = {
  testID: PropTypes.string,
};

export default CategoryFilter;
