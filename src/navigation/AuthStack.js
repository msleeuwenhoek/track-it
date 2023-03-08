import { createStackNavigator } from "@react-navigation/stack";

//screens
import WelcomeScreen from "../components/pages/WelcomeScreen";
import LoginScreen from "../components/pages/LoginScreen";
import RegistrationScreen from "../components/pages/RegistrationScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
