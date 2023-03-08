import { useState } from "react";
import {
  View,
  useWindowDimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import AddModalStyle from "./AddModal.style";
import * as utilityStyles from "../../../styles/utility.js";
import Button from "../../atoms/Button/Button";
import { useNavigation } from "@react-navigation/native";

const AddModal = (props) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { height, width } = useWindowDimensions();

  const actions = [
    {
      icon: "trophy",
      type: "font-awesome",
      color: utilityStyles.colors.colorHighlight2,
      action: "goal",
      style: { bottom: 70, left: width / 2 - 160 },
    },

    {
      icon: "add-to-list",
      type: "entypo",
      color: utilityStyles.colors.colorHighlight3,
      action: "activity",
      style: { bottom: 160, right: width / 2 - 110 },
    },
    {
      icon: "smiley",
      type: "octicon",
      color: utilityStyles.colors.colorHighlight1,
      action: "mood",
      style: { bottom: 160, left: width / 2 - 110 },
    },
    {
      icon: "category",
      type: "material",
      color: utilityStyles.colors.colorHighlight4,
      action: "category",
      style: { bottom: 70, right: width / 2 - 160 },
    },
  ];

  return (
    <View testID={props.testID} style={AddModalStyle.View}>
      <Button
        icon="add"
        type="ionicon"
        size={45}
        color={utilityStyles.colors.colorBaseLight}
        style={AddModalStyle.Button}
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Modal visible={modalVisible} transparent>
        <TouchableOpacity
          style={{
            height: height,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            justifyContent: "flex-end",
          }}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <View
            style={{
              height: 300,
            }}
          >
            {actions.map((action) => {
              return (
                <Button
                  key={action.action}
                  icon={action.icon}
                  type={action.type}
                  text={action.action}
                  style={[
                    {
                      backgroundColor: action.color,
                      borderRadius: 50,
                      padding: 10,
                      width: 90,
                      height: 90,
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      margin: 10,
                    },
                    action.style,
                  ]}
                  textColor={utilityStyles.colors.colorBaseDark}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("Add", {
                      action: "Add",
                      type: action.action,
                    });
                  }}
                />
              );
            })}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

AddModal.propTypes = {
  testID: PropTypes.string,
};

export default AddModal;
