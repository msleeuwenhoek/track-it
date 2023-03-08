import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import GraphScreenStyle from "./GraphScreen.style";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import { ChartProvider } from "../../../../contexts/chartContext";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ChartContainer from "../../organisms/ChartContainer";

const GraphScreen = (props) => {
  const { isLoaded, categories } = useContext(DatabaseContext);
  const selectedCategory = categories.length > 0 ? categories[0].data.name : "";

  if (isLoaded) {
    return (
      <View testID={props.testID} style={GraphScreenStyle.View}>
        <ChartProvider category={selectedCategory}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ChartContainer />
          </ScrollView>
        </ChartProvider>
      </View>
    );
  } else {
    return <LoadingScreen />;
  }
};

GraphScreen.propTypes = {
  testID: PropTypes.string,
};

export default GraphScreen;
