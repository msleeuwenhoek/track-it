import { useState } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import ChartContainerStyle from "./ChartContainer.style";
import Chart from "../../atoms/Chart";
import * as utilityStyles from "../../../styles/utility.js";
import Label from "../../atoms/Label/Label";
import {
  getWeekDates,
  formattedDateRange,
  getSelectedCategory,
} from "../../../config/GenericFunctions";
import { useContext } from "react";
import { ChartContext, DatabaseContext } from "../../../../contexts";
import { Divider } from "react-native-elements";
import DateChanger from "../../molecules/DateChanger/DateChanger";
import Button from "../../atoms/Button/Button";
import { useNavigation } from "@react-navigation/native";
import SubcategoryFilter from "../../molecules/SubcategoryFilter";
import Emoji from "../../../images/slightly_smiling_face.png";
import CategoryFilter from "../../molecules/CategoryFilter/CategoryFilter";
import { longMonthNames } from "../../../config/dates";

const ChartContainer = (props) => {
  const navigation = useNavigation();
  const { categories, selectedDate } = useContext(DatabaseContext);
  const [showMood, setShowMood] = useState(false);
  const weekDates = getWeekDates(selectedDate);
  const {
    setDataType,
    dataType,
    subcategory,
    setSubcategory,
    timespan,
    setTimespan,
  } = useContext(ChartContext);
  const selectedCategory = getSelectedCategory(categories, dataType);

  return (
    <View testID={props.testID} style={ChartContainerStyle.View}>
      <View style={ChartContainerStyle.HeadingContainer}>
        <Button
          text={`${timespan}ly`}
          style={ChartContainerStyle.TimespanButton}
          textStyle={ChartContainerStyle.TimespanButtonText}
          onPress={() => {
            setTimespan(timespan === "week" ? "month" : "week");
          }}
        />
        <Text style={ChartContainerStyle.Heading}>activity analysis</Text>
      </View>
      <View style={ChartContainerStyle.Container}>
        {categories.length === 0 ? (
          <Button
            icon="stats-chart"
            type="ionicon"
            text="start tracking"
            textColor={utilityStyles.colors.colorHighlight3}
            style={ChartContainerStyle.Button}
            textStyle={ChartContainerStyle.ButtonText}
            onPress={() => {
              navigation.navigate("Add", { type: "category" });
            }}
          />
        ) : (
          <CategoryFilter
            onPress={(value) => {
              setDataType(value);
              setSubcategory("");
            }}
            condition={dataType}
          />
        )}
      </View>
      {selectedCategory !== undefined && dataType !== "" && (
        <View>
          {selectedCategory.data.subcategories.length > 0 && (
            <SubcategoryFilter
              defaultItem={`all ${selectedCategory.data.name}`}
              items={selectedCategory.data.subcategories}
              themeColor={selectedCategory.data.themeColor}
              condition={subcategory}
              onPress={(value) => {
                setSubcategory(value);
              }}
            />
          )}
          <Divider style={ChartContainerStyle.Divider} />
          <View style={ChartContainerStyle.TitleConfigContainer}>
            <View>
              <Label
                text={
                  subcategory !== "" ? subcategory : selectedCategory.data.name
                }
                additionalClasses={ChartContainerStyle.Heading}
              />
              <Text
                style={[
                  ChartContainerStyle.Text,
                  {
                    color: selectedCategory.data.themeColor,
                  },
                ]}
              >
                {selectedCategory.data.unit}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setShowMood((value) => !value);
              }}
              style={[
                ChartContainerStyle.MoodContainer,
                showMood && ChartContainerStyle.MoodActive,
              ]}
            >
              <Image source={Emoji} style={ChartContainerStyle.Image} />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Chart weekDates={weekDates} showMood={showMood} />
      <DateChanger
        text={
          timespan === "week"
            ? `${formattedDateRange(
                weekDates[0],
                weekDates[6]
              )} ${selectedDate.getFullYear()}`
            : `${
                longMonthNames[selectedDate.getMonth()]
              } ${selectedDate.getFullYear()}`
        }
        interval={7}
        switchType={timespan}
        color={utilityStyles.colors.colorBaseLight}
        style={ChartContainerStyle.DateChanger}
      />
    </View>
  );
};

ChartContainer.propTypes = {
  testID: PropTypes.string,
};

export default ChartContainer;
