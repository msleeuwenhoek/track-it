import { View, Text } from "react-native";
import PropTypes from "prop-types";
import CategoryFormStyle from "./CategoryForm.style";
import { useState, useContext } from "react";
import Button from "../../atoms/Button/Button";
import IconPickerOverlay from "../IconPickerOverlay/IconPickerOverlay";
import { Input } from "react-native-elements";
import { DatabaseContext } from "../../../../contexts";
import { useNavigation } from "@react-navigation/native";
import handleSubmit from "../../../config/validation/validateCategory";
import DynamicInputs from "../DynamicInputs/DynamicInputs";
import ColorPicker from "../ColorPicker/ColorPicker";
import UnitFilter from "../UnitFilter/UnitFilter";
import getData from "../../../../hooks/getData";
import LoadingOverlay from "../../organisms/LoadingOverlay/LoadingOverlay";

const CategoryForm = (props) => {
  const { user, setCategories } = useContext(DatabaseContext);
  const navigation = useNavigation();
  const [showLoading, setShowLoading] = useState(false);

  const units = [
    "ml",
    "liters",
    "minutes",
    "hours",
    "grams",
    "kg",
    "kcal",
    "no unit",
  ];
  const [formData, setFormData] = useState(
    props.data
      ? {
          name: props.data.data.name,
          themeColor: props.data.data.themeColor,
          icon: {
            icon: props.data.data.icon.icon,
            type: props.data.data.icon.type,
          },
          subcategories: [...props.data.data.subcategories, ""],
          unit: props.data.data.unit === "" ? "no unit" : props.data.data.unit,
        }
      : {
          name: "",
          themeColor: "",
          icon: { icon: "", type: "" },
          subcategories: [""],
          unit: "",
        }
  );

  const [errors, setErrors] = useState({
    nameError: "",
    themeColorError: "",
    iconError: "",
    unitError: "",
  });

  return (
    <View testID={props.testID} style={CategoryFormStyle.View}>
      {props.data !== undefined ? (
        <Text style={CategoryFormStyle.Text}>
          editing category: {props.data.data.name}
        </Text>
      ) : (
        <Input
          maxLength={20}
          autoCapitalize="none"
          label="category name *"
          placeholder="exercise"
          value={String(formData.name)}
          errorMessage={errors.nameError}
          errorStyle={CategoryFormStyle.Error}
          onChangeText={(value) => {
            setFormData({
              ...formData,
              name: value,
            });
          }}
        />
      )}
      <DynamicInputs
        subcategories={formData.subcategories}
        category={formData.name}
        data={props.data}
        onPress={(array) => {
          setFormData({
            ...formData,
            subcategories: array,
          });
        }}
        remove={(index) => {
          setFormData({
            ...formData,
            subcategories: formData.subcategories.filter((subcategory, i) => {
              return i !== index;
            }),
          });
        }}
      />
      {props.data === undefined && (
        <View>
          <Text style={CategoryFormStyle.InputLabel}>unit *</Text>
          <UnitFilter
            items={units}
            condition={formData.unit}
            onPress={(value) => {
              setFormData({
                ...formData,
                unit: value,
              });
            }}
          />
          <Text
            style={[CategoryFormStyle.Error, CategoryFormStyle.StandaloneError]}
          >
            {errors.unitError}
          </Text>
        </View>
      )}

      <View style={{ flexDirection: "row" }}>
        <ColorPicker
          color={formData.themeColor}
          error={errors.themeColorError}
          onPress={(value) => {
            setFormData({
              ...formData,
              themeColor: value,
            });
          }}
        />

        <IconPickerOverlay
          error={errors.iconError}
          icon={formData.icon}
          onPress={(value) => {
            setFormData({
              ...formData,
              icon: { icon: value.icon, type: value.type },
            });
          }}
        />
      </View>

      <Button
        onPress={async () => {
          const docId = props.data !== undefined ? props.data.id : null;
          setErrors([]);
          let response = handleSubmit(user, formData, docId);
          setErrors(response.errors);

          if (props.page === "AccountSetup" && response.submitted) {
            setShowLoading(true);
            const newCategories = await getData(user.uid, "categories");
            setCategories(newCategories);
            setShowLoading(false);
            props.onPress();
          } else if (response.submitted) {
            setShowLoading(true);
            const newCategories = await getData(user.uid, "categories");
            setCategories(newCategories);
            setShowLoading(false);
            navigation.goBack();
          }
        }}
        style={CategoryFormStyle.Button}
        text={props.page === "Edit" ? "edit" : "add"}
        textStyle={CategoryFormStyle.ButtonText}
      />
      <LoadingOverlay isVisible={showLoading} />
    </View>
  );
};

CategoryForm.propTypes = {
  testID: PropTypes.string,
};

export default CategoryForm;
