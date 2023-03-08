import { View } from "react-native";
import PropTypes from "prop-types";
import AccountStyle from "./Account.style";
import { Avatar, Divider } from "react-native-elements";
import * as utilityStyles from "../../../styles/utility.js";
import Label from "../../atoms/Label/Label";
import { getAuth, signOut } from "firebase/auth";
import Button from "../../atoms/Button/Button";

const Account = (props) => {
  const auth = getAuth();

  return (
    <View testID={props.testID} style={AccountStyle.View}>
      <View style={AccountStyle.FlexRow}>
        <View style={AccountStyle.FlexRow}>
          <Avatar
            rounded
            icon={{ name: "user", type: "font-awesome" }}
            size={55}
            containerStyle={{
              backgroundColor: utilityStyles.colors.colorHighlight1,
            }}
          />
          <View style={{ marginLeft: 10, maxWidth: 200 }}>
            <Label
              text={auth.currentUser.displayName}
              additionalClasses={AccountStyle.BoldText}
            />
            <Label
              text={auth.currentUser.email}
              additionalClasses={AccountStyle.Text}
            />
          </View>
        </View>
        <Button
          icon="logout"
          color={utilityStyles.colors.colorBaseLight}
          onPress={() => {
            signOut(auth);
          }}
        />
      </View>

      <Divider style={AccountStyle.Divider} />
    </View>
  );
};

Account.propTypes = {
  testID: PropTypes.string,
};

export default Account;
