import { View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import IconSelectionContainerStyle from "./IconSelectionContainer.style";
import * as utilityStyles from "../../../styles/utility.js";
import Button from "../../atoms/Button/Button";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import { useNavigation } from "@react-navigation/native";

const IconSelectionContainer = (props) => {
  const { categories } = useContext(DatabaseContext);
  const navigation = useNavigation();
  return (
    <View testID={props.testID} style={IconSelectionContainerStyle.View}>
      <ScrollView
        horizontal={true}
        style={IconSelectionContainerStyle.ScrollView}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row" }}>
          {categories.map((category) => {
            return (
              <View
                key={category.data.name}
                style={IconSelectionContainerStyle.ButtonContainer}
              >
                <Button
                  icon={category.data.icon.icon}
                  size={24}
                  type={category.data.icon.type}
                  color={utilityStyles.colors.colorBaseLight}
                  style={[
                    IconSelectionContainerStyle.Button,
                    category.data.name === props.selectedCategory &&
                      IconSelectionContainerStyle.ButtonActive,
                    {
                      backgroundColor: category.data.themeColor,
                    },
                  ]}
                  onPress={() => {
                    props.onPress(category.data.name);
                  }}
                />
                {category.data.name === props.selectedCategory && (
                  <Text style={IconSelectionContainerStyle.Text}>
                    {category.data.name}
                  </Text>
                )}
              </View>
            );
          })}

          {props.page !== "stats" && (
            <Button
              icon="add-outline"
              size={24}
              type="ionicon"
              color={utilityStyles.colors.colorBaseDark}
              style={[
                IconSelectionContainerStyle.Button,
                IconSelectionContainerStyle.AddButton,
              ]}
              onPress={() => {
                navigation.reset({
                  index: 1,
                  routes: [
                    { name: "Home" },
                    {
                      name: "Add",
                      params: { action: "Add", type: "category" },
                    },
                  ],
                });
              }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

IconSelectionContainer.propTypes = {
  testID: PropTypes.string,
};

export default IconSelectionContainer;
