import { View } from "react-native";
import PropTypes from "prop-types";
import HeaderStyle from "./Header.style";
import Button from "../../atoms/Button/Button";
import * as utilityStyles from "../../../styles/utility.js";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import { formattedDate } from "../../../config/GenericFunctions";
import { Avatar } from "react-native-elements";
import Label from "../../atoms/Label/Label";

const Header = (props) => {
  const navigation = useNavigation();
  const { selectedDate } = useContext(DatabaseContext);
  return (
    <View testID={props.testID} style={HeaderStyle.View}>
      <View style={HeaderStyle.FlexRow}>
        <Button
          icon="calendar"
          size={38}
          type="ionicon"
          color={utilityStyles.colors.colorBaseLight}
          onPress={() => navigation.navigate("Calendar", { page: "Home" })}
        />
        <Label
          text={formattedDate(selectedDate)}
          additionalClasses={HeaderStyle.Text}
        />
      </View>

      <Avatar
        rounded
        icon={{ name: "user", type: "font-awesome" }}
        size={38}
        containerStyle={HeaderStyle.Avatar}
        onPress={() => {
          navigation.navigate("Account");
        }}
      />
    </View>
  );
};

Header.propTypes = {
  testID: PropTypes.string,
};

export default Header;
