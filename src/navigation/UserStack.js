import { createStackNavigator } from "@react-navigation/stack";
import { getAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect, useContext } from "react";

//screens
import Home from "../components/pages/Home";
import Calendar from "../components/pages/Calendar";
import Add from "../components/pages/Add";
import Account from "../components/pages/Account";
import ConfigureAccount from "../components/pages/ConfigureAccount";
import LoadingScreen from "../components/pages/LoadingScreen/LoadingScreen";
import { DatabaseContext } from "../../contexts";

const Stack = createStackNavigator();

const HomeStack = () => {
  const [loading, setLoading] = useState(null);
  const { isLoaded } = useContext(DatabaseContext);
  const auth = getAuth();

  const load = async () => {
    await AsyncStorage.getItem(auth.currentUser.uid).then((result) => {
      if (result == null) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    if (isLoaded) {
      load();
    }
  }, [isLoaded]);

  if (loading === null) {
    return <LoadingScreen />;
  } else {
    return (
      <Stack.Navigator initialRouteName={loading ? "ConfigureAccount" : "Home"}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen
          name="Add"
          component={Add}
          options={({ route }) => ({ headerTitle: route.params.action })}
        />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ConfigureAccount"
          component={ConfigureAccount}
        />
      </Stack.Navigator>
    );
  }
};

export default HomeStack;
