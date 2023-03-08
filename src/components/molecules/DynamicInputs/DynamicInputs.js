import { View } from "react-native";
import PropTypes from "prop-types";
import DynamicInputsStyle from "./DynamicInputs.style";
import Label from "../../atoms/Label/Label";
import Button from "../../atoms/Button/Button";
import { useContext, useState } from "react";
import { DatabaseContext } from "../../../../contexts";
import { Input } from "react-native-elements";
import { getSelectedCategory } from "../../../config/GenericFunctions";

const DynamicInputs = (props) => {
  const [subcategories, setSubcategories] = useState(props.subcategories);
  const { categories } = useContext(DatabaseContext);
  const selectedCategory =
    props.data !== undefined
      ? getSelectedCategory(categories, props.category)
      : null;

  return (
    <View testID={props.testID} style={DynamicInputsStyle.View}>
      <Label
        text="subcategories (optional)"
        additionalClasses={DynamicInputsStyle.InputLabel}
      />

      {subcategories.map((subcategory, index) => {
        const disabled =
          selectedCategory !== null &&
          selectedCategory.data.subcategories[index] === subcategory
            ? true
            : false;
        return (
          <Input
            placeholder="cardio"
            maxLength={20}
            autoCapitalize="none"
            disabled={disabled}
            key={index}
            inputStyle={DynamicInputsStyle.Input}
            value={props.subcategories[index]}
            onChangeText={(value) => {
              let subcategoriesCopy = [...props.subcategories];
              subcategoriesCopy[index] = value;
              props.onPress(subcategoriesCopy);
              if (index === subcategories.length - 1) {
                setSubcategories((prevState) => [...prevState, ""]);
              }
            }}
            inputContainerStyle={DynamicInputsStyle.InputContainer}
            rightIcon={
              disabled ? (
                ""
              ) : index === subcategories.length - 1 ? (
                <Button
                  icon="add-outline"
                  size={20}
                  type="ionicon"
                  style={[
                    DynamicInputsStyle.Button,
                    DynamicInputsStyle.AddButton,
                  ]}
                  onPress={() => {
                    setSubcategories((prevState) => [...prevState, ""]);
                  }}
                />
              ) : (
                <Button
                  icon="minus"
                  size={20}
                  type="feather"
                  style={[
                    DynamicInputsStyle.Button,
                    DynamicInputsStyle.RemoveButton,
                  ]}
                  onPress={() => {
                    setSubcategories([
                      ...subcategories.filter((subcategory, i) => {
                        return i !== index;
                      }),
                    ]);
                    props.remove(index);
                  }}
                />
              )
            }
          />
        );
      })}
    </View>
  );
};

DynamicInputs.propTypes = {
  testID: PropTypes.string,
};

export default DynamicInputs;
