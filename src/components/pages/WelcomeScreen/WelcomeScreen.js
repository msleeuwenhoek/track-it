import { View, Text } from "react-native";
import PropTypes from "prop-types";
import WelcomeScreenStyle from "./WelcomeScreen.style";
import Button from "../../atoms/Button/Button";
import Label from "../../atoms/Label/Label";

const WelcomeScreen = (props) => {
  return (
    <View testID={props.testID} style={WelcomeScreenStyle.View}>
      <Label text="welcome!" additionalClasses={WelcomeScreenStyle.Heading} />
      <Button
        text="login"
        style={[WelcomeScreenStyle.Button, WelcomeScreenStyle.ButtonFill]}
        textStyle={WelcomeScreenStyle.ButtonText}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      />
      <Button
        text="register"
        style={[WelcomeScreenStyle.ButtonOutline, WelcomeScreenStyle.Button]}
        textStyle={WelcomeScreenStyle.ButtonText}
        onPress={() => {
          props.navigation.navigate("Register");
        }}
      />
    </View>
  );
};

WelcomeScreen.propTypes = {
  testID: PropTypes.string,
};

export default WelcomeScreen;
