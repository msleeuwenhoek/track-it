import * as utilityStyles from "../styles/utility";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { DatabaseProvider } from "../../contexts/DatabaseContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import { useEffect, useState } from "react";
import getData from "../../hooks/getData";
import { getAuth } from "firebase/auth";

//screens
import HomeStack from "./UserStack";
import AddModal from "../components/organisms/AddModal";
import GraphScreen from "../components/pages/GraphScreen/GraphScreen";
import GoalCompletionScreen from "../components/pages/GoalCompletionScreen/GoalCompletionScreen";
import CategoriesScreen from "../components/pages/CategoriesScreen/CategoriesScreen";

function userTab() {
  const Tab = createBottomTabNavigator();
  const { user } = useAuthentication();
  const auth = getAuth();
  // while using HomeStack, only display the tab bar when on homescreen, not while opening other stack screens
  const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Loading";

    if (routeName === "Home") {
      return "flex";
    } else {
      return "none";
    }
  };

  const [isLoaded, setIsLoaded] = useState(false);
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState([]);
  const [moods, setMoods] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const activitiesList = await getData(auth.currentUser.uid, "activities");
      setActivities(activitiesList);
      const goalsList = await getData(auth.currentUser.uid, "goals");
      setGoals(goalsList);

      const moodsList = await getData(auth.currentUser.uid, "moods");
      setMoods(moodsList);

      const categoriesList = await getData(auth.currentUser.uid, "categories");
      setCategories(categoriesList);
      setIsLoaded(true);
    }
    fetchData();
  }, []);

  return (
    <DatabaseProvider
      user={user}
      activitiesData={activities}
      goalsData={goals}
      moodsData={moods}
      categoriesData={categories}
      dataIsLoaded={isLoaded}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home2"
          component={HomeStack}
          options={({ route }) => ({
            tabBarStyle: { display: getTabBarVisibility(route) },
            tabBarIcon: ({ focused }) => (
              <Icon
                name="home"
                size={26}
                type="ionicon"
                style={
                  focused && {
                    borderBottomWidth: 3,
                    paddingHorizontal: 8,
                    borderColor: utilityStyles.colors.colorHighlight2,
                  }
                }
                color={
                  focused
                    ? utilityStyles.colors.colorPrimaryLight
                    : utilityStyles.colors.colorBaseDark
                }
              />
            ),
          })}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="format-list-bulleted-type"
                size={28}
                type="material-community"
                style={
                  focused && {
                    borderBottomWidth: 3,
                    paddingHorizontal: 8,
                    borderColor: utilityStyles.colors.colorHighlight2,
                  }
                }
                color={
                  focused
                    ? utilityStyles.colors.colorPrimaryLight
                    : utilityStyles.colors.colorBaseDark
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home3"
          component={HomeStack}
          options={{
            tabBarButton: () => <AddModal />,
          }}
        />
        <Tab.Screen
          name="Goals"
          component={GoalCompletionScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="calendar-check-o"
                size={26}
                type="font-awesome"
                style={
                  focused && {
                    paddingBottom: 2,
                    borderBottomWidth: 3,
                    paddingHorizontal: 8,
                    borderColor: utilityStyles.colors.colorHighlight2,
                  }
                }
                color={
                  focused
                    ? utilityStyles.colors.colorPrimaryLight
                    : utilityStyles.colors.colorBaseDark
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Graph"
          component={GraphScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon
                name="stats-chart"
                size={26}
                type="ionicon"
                style={
                  focused && {
                    borderBottomWidth: 3,
                    paddingHorizontal: 8,
                    borderColor: utilityStyles.colors.colorHighlight2,
                  }
                }
                color={
                  focused
                    ? utilityStyles.colors.colorPrimaryLight
                    : utilityStyles.colors.colorBaseDark
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </DatabaseProvider>
  );
}

export default userTab;
