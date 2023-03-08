import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import HomeStyle from "./Home.style";
import Hero from "../../organisms/Hero";
import ActivityList from "../../organisms/ActivityList";
import GoalList from "../../organisms/GoalList/GoalList";
import MoodList from "../../organisms/MoodList/MoodList";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const Home = (props) => {
  const { isLoaded } = useContext(DatabaseContext);

  if (isLoaded) {
    return (
      <View testID={props.testID} style={HomeStyle.View}>
        <ScrollView>
          <Hero />
          <View style={HomeStyle.Content}>
            <GoalList />
            <ActivityList />
            <MoodList />
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return <LoadingScreen />;
  }
};

Home.propTypes = {
  testID: PropTypes.string,
};

export default Home;
