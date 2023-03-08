import { useContext, useState } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import AddMoodFormStyle from "./AddMoodForm.style";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { DatabaseContext, FormContext } from "../../../../contexts";
import Button from "../../atoms/Button/Button";
import handleSubmit from "../../../config/validation/validateMood";
import getData from "../../../../hooks/getData";
import LoadingOverlay from "../../organisms/LoadingOverlay/LoadingOverlay";
import MoodPicker from "../MoodPicker/MoodPicker";

const AddMoodForm = (props) => {
  const navigation = useNavigation();
  const { formData, setFormData, docId, errors, setErrors } =
    useContext(FormContext);
  const { user, setSelectedDate, setMoods } = useContext(DatabaseContext);
  const [showLoading, setShowLoading] = useState(false);

  return (
    <View testID={props.testID} style={AddMoodFormStyle.View}>
      <View style={AddMoodFormStyle.FlexRow}>
        <MoodPicker
          onPress={(value) => {
            setFormData((prevState) => ({
              ...prevState,
              rating: value,
            }));
          }}
          active={formData.rating}
        />
      </View>

      <Input
        maxLength={100}
        multiline={true}
        value={formData.note}
        label="what caused you to feel this way? *"
        inputStyle={AddMoodFormStyle.Input}
        inputContainerStyle={AddMoodFormStyle.InputContainer}
        errorStyle={AddMoodFormStyle.Error}
        errorMessage={errors.noteError}
        placeholder="I felt happy because ..."
        placeholderTextColor="#e7e8ec"
        onChangeText={(value) => {
          setFormData((prevState) => ({
            ...prevState,
            note: value,
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
            setSelectedDate(new Date());
            const newMoods = await getData(user.uid, "moods");
            setMoods(newMoods);
            setShowLoading(false);
            navigation.navigate("Home");
          }
        }}
        style={AddMoodFormStyle.Button}
        textStyle={AddMoodFormStyle.ButtonText}
        text={props.page === "Edit" ? "edit" : "add"}
      />
      <LoadingOverlay isVisible={showLoading} />
    </View>
  );
};

AddMoodForm.propTypes = {
  testID: PropTypes.string,
};

export default AddMoodForm;
