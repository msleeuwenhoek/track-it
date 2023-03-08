import {
  View,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import PropTypes from "prop-types";
import FormModalStyle from "./FormModal.style";
import CategoryForm from "../../molecules/CategoryForm/CategoryForm";
import Button from "../../atoms/Button/Button";

const FormModal = (props) => {
  const { width, height } = useWindowDimensions();
  return (
    <View testID={props.testID} style={FormModalStyle.View}>
      <TouchableOpacity
        style={{ height: height, width: width }}
        onPress={() => {
          props.onPress();
        }}
      ></TouchableOpacity>
      <View
        style={[
          FormModalStyle.ModalContainer,
          { height: height - 100, width: width - 40 },
        ]}
      >
        <Button
          style={[FormModalStyle.ExitButton, { zIndex: 10, padding: 10 }]}
          size={40}
          icon="cross"
          type="entypo"
          onPress={() => {
            props.onPress();
          }}
        />
        <ScrollView>
          <CategoryForm
            page="AccountSetup"
            onPress={() => {
              props.onPress();
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

FormModal.propTypes = {
  testID: PropTypes.string,
};

export default FormModal;
