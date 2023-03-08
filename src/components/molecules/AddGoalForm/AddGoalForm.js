import { useContext, useState } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import AddGoalFormStyle from "./AddGoalForm.style";
import { CheckBox, Input } from "react-native-elements";
import handleSubmit from "../../../config/validation/validateGoal";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import IconSelectionContainer from "../../molecules/IconSelectionContainer/IconSelectionContainer";
import Label from "../../atoms/Label/Label";
import { useNavigation } from "@react-navigation/native";
import { DatabaseContext, FormContext } from "../../../../contexts";
import CheckboxWithInput from "../../atoms/CheckboxWithInput/CheckboxWithInput";
import { getSelectedCategory } from "../../../config/GenericFunctions";
import UnitFilter from "../UnitFilter/UnitFilter";
import getData from "../../../../hooks/getData";
import LoadingOverlay from "../../organisms/LoadingOverlay/LoadingOverlay";

const AddGoalForm = (props) => {
  const { setFormData, formData, setErrors, errors, docId } =
    useContext(FormContext);
  const navigation = useNavigation();
  const { user, categories, setGoals } = useContext(DatabaseContext);
  const [showLoading, setShowLoading] = useState(false);

  let selectedCategory = "";
  if (formData.category !== "") {
    selectedCategory = getSelectedCategory(categories, formData.category);
  }

  return (
    <View testID={props.testID} style={AddGoalFormStyle.View}>
      <Label
        text={`category *`}
        additionalClasses={AddGoalFormStyle.InputLabel}
      />

      <IconSelectionContainer
        onPress={(value) => {
          setFormData((prevState) => ({
            ...prevState,
            category: value,
            measuredBy: "",
            amount: "",
            specificity: "any",
          }));
        }}
        selectedCategory={formData.category}
      />
      <Text style={[AddGoalFormStyle.Error, AddGoalFormStyle.StandaloneError]}>
        {errors.categoryError}
      </Text>

      {selectedCategory !== "" &&
        selectedCategory.data.subcategories.length > 0 && (
          <>
            <Text style={AddGoalFormStyle.InputLabel}>
              type of {selectedCategory.data.name} *
            </Text>
            <UnitFilter
              items={["any", ...selectedCategory.data.subcategories]}
              condition={formData.specificity}
              onPress={(value) => {
                setFormData({
                  ...formData,
                  specificity: value,
                });
              }}
            />
            <Text style={AddGoalFormStyle.Error}>
              {errors.specificityError}
            </Text>
          </>
        )}

      <Input
        label="name *"
        maxLength={20}
        value={formData.name}
        placeholder="drink enough water"
        errorStyle={AddGoalFormStyle.Error}
        errorMessage={errors.nameError}
        onChangeText={(value) => {
          setFormData((prevState) => ({
            ...prevState,
            name: value,
          }));
        }}
      />

      {formData.category !== "" ? (
        <>
          <CheckboxWithInput
            text="goal *"
            options={
              selectedCategory.data.unit === ""
                ? ["times"]
                : [selectedCategory.data.unit, "times"]
            }
            selected={formData.measuredBy}
            onPress={(value) => {
              setFormData((prevState) => ({
                ...prevState,
                measuredBy: value,
              }));
            }}
          />
          <CheckBox
            title="the goal is to stay under this value"
            checked={formData.stayBelow}
            containerStyle={AddGoalFormStyle.CheckBoxContainer}
            textStyle={AddGoalFormStyle.CheckBoxText}
            onPress={() => {
              if (formData.stayBelow === false) {
                setFormData({ ...formData, stayBelow: true });
              } else {
                setFormData({ ...formData, stayBelow: false });
              }
            }}
          />
          <Text
            style={[AddGoalFormStyle.Error, AddGoalFormStyle.StandaloneError]}
          >
            {errors.measuredByError !== ""
              ? errors.measuredByError
              : errors.amountError}
          </Text>
        </>
      ) : null}
      <Checkbox
        text="repetition *"
        options={["daily", "weekly"]}
        selected={formData.repetition}
        error={errors.repetitionError}
        onPress={(value) => {
          setFormData((prevState) => ({
            ...prevState,
            repetition: value,
          }));
        }}
      />
      <Button
        onPress={async () => {
          setErrors([]);
          let response = handleSubmit(user, formData, docId);
          setErrors(response.errors);
          if (response.submitted) {
            setShowLoading(true);
            const newGoals = await getData(user.uid, "goals");
            setGoals(newGoals);
            setShowLoading(false);
            navigation.navigate("Home");
          }
        }}
        style={AddGoalFormStyle.Button}
        textStyle={AddGoalFormStyle.ButtonText}
        text={props.page === "Edit" ? "edit" : "add"}
      />
      <LoadingOverlay isVisible={showLoading} />
    </View>
  );
};

AddGoalForm.propTypes = {
  testID: PropTypes.string,
};

export default AddGoalForm;
