import { View, Text } from "react-native";
import PropTypes from "prop-types";
import RegistrationScreenStyle from "./RegistrationScreen.style";
import { useState } from "react";
import { Input } from "react-native-elements";
import Button from "../../atoms/Button/Button";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import addNewUser from "../../../../hooks/addNewUser";
import getError from "../../../config/validationErrors";

const RegistrationScreen = (props) => {
  const auth = getAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    formError: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    repeatPasswordError: "",
  });

  function validateRegistration() {
    let nameError = formData.name === "" ? "please fill in your name" : "";
    let emailError = formData.email === "" ? "please fill in an email" : "";
    let passwordError =
      formData.password === "" ? "please fill in a password" : "";
    passwordError = /\s/.test(formData.password)
      ? "password can't contain white spaces"
      : passwordError;
    passwordError =
      formData.password.length < 8
        ? "password should be at least 7 characters"
        : passwordError;

    let repeatPasswordError =
      formData.repeatPassword === "" ? "please repeat your password" : "";
    repeatPasswordError =
      formData.password !== formData.repeatPassword
        ? "passwords do not match"
        : repeatPasswordError;
    setErrors({
      formError: "",
      nameError: nameError,
      emailError: emailError,
      passwordError: passwordError,
      repeatPasswordError: repeatPasswordError,
    });

    if (
      nameError === "" &&
      emailError === "" &&
      passwordError === "" &&
      repeatPasswordError === ""
    ) {
      register();
    }
  }
  async function register() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password
      ).then(() => {
        addNewUser(auth.currentUser, formData.name.trim());
      });
      await updateProfile(auth.currentUser, {
        displayName: formData.name.trim(),
      }).catch((err) => console.log(err));
    } catch (error) {
      setErrors({
        formError: getError(error.code),
        nameError: "",
        emailError: "",
        passwordError: "",
        repeatPasswordError: "",
      });
    }
  }

  return (
    <View testID={props.testID} style={RegistrationScreenStyle.View}>
      <Text style={RegistrationScreenStyle.Heading}>Register here</Text>

      <Input
        placeholder="Name"
        maxLength={20}
        inputStyle={RegistrationScreenStyle.Input}
        value={formData.name}
        errorMessage={errors.nameError}
        errorStyle={RegistrationScreenStyle.Error}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <Input
        placeholder="Email"
        autoCapitalize="none"
        value={formData.email}
        errorMessage={errors.emailError}
        errorStyle={RegistrationScreenStyle.Error}
        inputStyle={RegistrationScreenStyle.Input}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <Input
        placeholder="Password"
        autoCapitalize="none"
        value={formData.password}
        errorMessage={errors.passwordError}
        errorStyle={RegistrationScreenStyle.Error}
        inputStyle={RegistrationScreenStyle.Input}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry={true}
      />
      <Input
        placeholder="Repeat password"
        autoCapitalize="none"
        value={formData.repeatPassword}
        errorMessage={
          errors.repeatPasswordError !== ""
            ? errors.repeatPasswordError
            : errors.formError
        }
        errorStyle={RegistrationScreenStyle.Error}
        inputStyle={RegistrationScreenStyle.Input}
        onChangeText={(text) =>
          setFormData({ ...formData, repeatPassword: text })
        }
        secureTextEntry={true}
      />
      <Button
        style={RegistrationScreenStyle.Button}
        textStyle={RegistrationScreenStyle.ButtonText}
        text="register"
        onPress={validateRegistration}
      />
      <Button
        text="login instead"
        onPress={() => {
          props.navigation.navigate("Login");
        }}
        style={[RegistrationScreenStyle.Link]}
        textStyle={RegistrationScreenStyle.ButtonText}
      />
    </View>
  );
};

RegistrationScreen.propTypes = {
  testID: PropTypes.string,
};

export default RegistrationScreen;
