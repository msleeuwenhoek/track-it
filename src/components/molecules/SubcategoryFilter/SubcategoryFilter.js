import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import SubcategoryFilterStyle from "./SubcategoryFilter.style";
import Button from "../../atoms/Button/Button";

const SubcategoryFilter = (props) => {
  return (
    <View testID={props.testID} style={SubcategoryFilterStyle.View}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={SubcategoryFilterStyle.ScrollView}
      >
        <Button
          text={props.defaultItem}
          style={[
            SubcategoryFilterStyle.Button,
            { borderColor: props.themeColor },
            props.condition === "" && { backgroundColor: props.themeColor },
          ]}
          textStyle={[
            { color: props.themeColor },
            props.condition === "" && SubcategoryFilterStyle.ButtonActiveText,
          ]}
          onPress={() => {
            props.onPress("");
          }}
        />
        {props.items.map((item, index) => {
          return (
            <Button
              key={index}
              text={item}
              style={[
                SubcategoryFilterStyle.Button,
                { borderColor: props.themeColor },
                props.condition === item && {
                  backgroundColor: props.themeColor,
                },
              ]}
              textStyle={[
                { color: props.themeColor },
                props.condition === item &&
                  SubcategoryFilterStyle.ButtonActiveText,
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

SubcategoryFilter.propTypes = {
  testID: PropTypes.string,
};

export default SubcategoryFilter;
