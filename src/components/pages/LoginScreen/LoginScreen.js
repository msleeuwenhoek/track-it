import { View, Text } from "react-native";
import PropTypes from "prop-types";
import LoginScreenStyle from "./LoginScreen.style";
import { useState } from "react";
import { Input } from "react-native-elements";
import Button from "../../atoms/Button/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import getError from "../../../config/validationErrors";

const LoginScreen = (props) => {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    formError: "",
    emailError: "",
    passwordError: "",
  });

  function validateLogin() {
    let emailError = formData.email === "" ? "email is mandatory" : "";
    let passwordError = formData.password === "" ? "password is mandatory" : "";
    setErrors({
      formError: "",
      emailError: emailError,
      passwordError: passwordError,
    });
    if (emailError === "" && passwordError === "") {
      login();
    }
  }

  async function login() {
    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password
      );
    } catch (error) {
      setErrors({
        emailError: "",
        passwordError: "",
        formError: getError(error.code),
      });
    }
  }

  return (
    <View testID={props.testID} style={LoginScreenStyle.View}>
      <Text style={LoginScreenStyle.Heading}>Login</Text>
      <Input
        inputStyle={LoginScreenStyle.Input}
        autoCapitalize="none"
        placeholder="Email"
        value={formData.email}
        errorMessage={errors.emailError}
        errorStyle={LoginScreenStyle.Error}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <Input
        inputStyle={LoginScreenStyle.Input}
        autoCapitalize="none"
        placeholder="Password"
        value={formData.password}
        errorMessage={
          errors.passwordError !== "" ? errors.passwordError : errors.formError
        }
        errorStyle={LoginScreenStyle.Error}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry={true}
      />

      <Button
        text="login"
        onPress={validateLogin}
        style={[LoginScreenStyle.Button, LoginScreenStyle.ButtonFill]}
        textStyle={LoginScreenStyle.ButtonText}
      />
      <Button
        text="register instead"
        onPress={() => {
          props.navigation.navigate("Register");
        }}
        style={[LoginScreenStyle.Link]}
        textStyle={LoginScreenStyle.ButtonText}
      />
    </View>
  );
};

LoginScreen.propTypes = {
  testID: PropTypes.string,
};

export default LoginScreen;
