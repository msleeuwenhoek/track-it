import { View, Text } from "react-native";
import PropTypes from "prop-types";
import AddActivityFormStyle from "./AddActivityForm.style";
import handleSubmit from "../../../config/validation/validateActivity";
import Button from "../../atoms/Button/Button";
import IconSelectionContainer from "../IconSelectionContainer/IconSelectionContainer";
import Timedatepicker from "../../molecules/Timedatepicker/Timedatepicker";
import Label from "../../atoms/Label/Label";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { DatabaseContext, FormContext } from "../../../../contexts";
import { Input } from "react-native-elements";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import { getSelectedCategory } from "../../../config/GenericFunctions";
import getData from "../../../../hooks/getData";
import LoadingOverlay from "../../organisms/LoadingOverlay/LoadingOverlay";

const AddActivityForm = (props) => {
  const navigation = useNavigation();
  const { formData, setFormData, setErrors, errors, docId } =
    useContext(FormContext);
  const { user, categories, setActivities } = useContext(DatabaseContext);
  const [showLoading, setShowLoading] = useState(false);

  let selectedCategory = {};
  if (formData.category !== "") {
    selectedCategory = getSelectedCategory(categories, formData.category);
  }

  return (
    <View testID={props.testID} style={AddActivityFormStyle.View}>
      <Label
        text={`category *`}
        additionalClasses={AddActivityFormStyle.InputLabel}
      />

      <IconSelectionContainer
        onPress={(value) => {
          setFormData((prevState) => ({
            ...prevState,
            category: value,
            amount: "",
            subcategory: "",
          }));
        }}
        selectedCategory={formData.category}
      />
      {errors.categoryError !== "" && (
        <Text
          style={[
            AddActivityFormStyle.Error,
            AddActivityFormStyle.StandaloneError,
          ]}
        >
          {errors.categoryError}
        </Text>
      )}
      <Text style={AddActivityFormStyle.InputLabel}>time and date *</Text>
      <Timedatepicker />

      {formData.category !== "" ? (
        <Input
          label="duration/amount *"
          placeholder="0"
          maxLength={4}
          value={String(formData.amount)}
          rightIcon={
            <Label
              text={selectedCategory.data.unit}
              additionalClasses={AddActivityFormStyle.InputLabel}
            />
          }
          keyboardType="numeric"
          errorStyle={AddActivityFormStyle.Error}
          errorMessage={errors.amountError}
          onChangeText={(value) => {
            setFormData((prevState) => ({
              ...prevState,
              amount: Number(value),
            }));
          }}
        />
      ) : null}

      {Object.keys(selectedCategory).length !== 0 &&
      selectedCategory.data.subcategories.length !== 0 ? (
        <Checkbox
          text="subcategory *"
          options={selectedCategory.data.subcategories}
          selected={formData.subcategory}
          error={errors.subcategoryError}
          onPress={(value) => {
            setFormData((prevState) => ({
              ...prevState,
              subcategory: value,
            }));
          }}
        />
      ) : null}

      <Button
        onPress={async () => {
          setErrors([]);
          let response = handleSubmit(user, formData, docId, selectedCategory);
          setErrors(response.errors);
          if (response.submitted) {
            setShowLoading(true);
            const newActivities = await getData(user.uid, "activities");
            setActivities(newActivities);
            setShowLoading(false);
            navigation.navigate("Home");
          }
        }}
        style={AddActivityFormStyle.Button}
        textStyle={AddActivityFormStyle.ButtonText}
        text={props.page === "Edit" ? "edit" : "add"}
      />
      <LoadingOverlay isVisible={showLoading} />
    </View>
  );
};

AddActivityForm.propTypes = {
  testID: PropTypes.string,
};

export default AddActivityForm;
