import { View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import ConfigureAccountStyle from "./ConfigureAccount.style";
import Button from "../../atoms/Button/Button";
import { useContext } from "react";
import CategoryList from "../../organisms/CategoryList/CategoryList";
import { DatabaseContext } from "../../../../contexts";
import * as utilityStyles from "../../../styles/utility.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

const ConfigureAccount = (props) => {
  const { categories, isLoaded, user } = useContext(DatabaseContext);
  const navigation = useNavigation();
  async function makeAccountKnown() {
    try {
      await AsyncStorage.setItem(user.uid, "known").then(
        navigation.reset({
          index: 0,
          routes: [
            {
              name: "Home",
            },
          ],
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
  if (isLoaded) {
    return (
      <View testID={props.testID} style={ConfigureAccountStyle.View}>
        <ScrollView contentContainerStyle={ConfigureAccountStyle.ScrollView}>
          {categories.length === 0 && (
            <Button
              icon="long-arrow-right"
              type="font-awesome"
              color={utilityStyles.colors.colorBaseLight}
              style={ConfigureAccountStyle.SkipButton}
              text="skip"
              onPress={makeAccountKnown}
              textStyle={[ConfigureAccountStyle.ButtonText, { marginLeft: 5 }]}
            />
          )}
          <Text style={ConfigureAccountStyle.Heading}>account setup</Text>
          <Text
            style={[ConfigureAccountStyle.Text, ConfigureAccountStyle.TextBold]}
          >
            what would you like to track?
          </Text>
          <CategoryList page="AccountSetup" />
          <Text style={ConfigureAccountStyle.Text}>
            don't worry, you can always add more categories later
          </Text>
          <Button
            style={ConfigureAccountStyle.Button}
            textStyle={ConfigureAccountStyle.ButtonText}
            text="done"
            onPress={makeAccountKnown}
          />
        </ScrollView>
      </View>
    );
  } else {
    return <LoadingScreen />;
  }
};

ConfigureAccount.propTypes = {
  testID: PropTypes.string,
};

export default ConfigureAccount;
