import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import UnitFilterStyle from "./UnitFilter.style";
import Button from "../../atoms/Button/Button";

const UnitFilter = (props) => {
  return (
    <View testID={props.testID} style={UnitFilterStyle.View}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={UnitFilterStyle.ScrollView}
      >
        {props.items.map((item, index) => {
          return (
            <Button
              key={index}
              text={item}
              style={[
                UnitFilterStyle.Button,
                props.condition === item && UnitFilterStyle.ButtonActive,
              ]}
              textStyle={[
                props.condition === item && UnitFilterStyle.ButtonActiveText,
              ]}
              onPress={() => {
                props.onPress(item);
              }}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

UnitFilter.propTypes = {
  testID: PropTypes.string,
};

export default UnitFilter;
