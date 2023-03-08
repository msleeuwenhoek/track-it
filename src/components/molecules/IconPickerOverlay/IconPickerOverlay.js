import { useState } from "react";
import { View, Text, useWindowDimensions, ScrollView } from "react-native";
import PropTypes from "prop-types";
import IconPickerOverlayStyle from "./IconPickerOverlay.style";
import iconList from "../../../config/iconList";
import { Overlay } from "react-native-elements";
import Label from "../../atoms/Label/Label";
import Button from "../../atoms/Button/Button";

const IconPickerOverlay = (props) => {
  const { width, height } = useWindowDimensions();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <View testID={props.testID} style={IconPickerOverlayStyle.View}>
      <Label
        text="icon *"
        additionalClasses={IconPickerOverlayStyle.InputLabel}
      />
      <Button
        icon={props.icon.icon !== "" ? props.icon.icon : "add-outline"}
        type={props.icon.type !== "" ? props.icon.type : "ionicon"}
        size={32}
        style={IconPickerOverlayStyle.Button}
        onPress={() => {
          setShowOverlay(true);
        }}
      />
      <Text style={IconPickerOverlayStyle.Error}>{props.error}</Text>
      <Overlay
        overlayStyle={{
          width: width - 40,
          height: height - 100,
        }}
        isVisible={showOverlay}
      >
        <ScrollView style={{}}>
          <View style={IconPickerOverlayStyle.FlexRow}>
            {iconList.map((icon) => {
              return (
                <Button
                  key={icon.icon}
                  icon={icon.icon}
                  type={icon.type}
                  size={32}
                  style={{ width: (width - 60) / 4, padding: 10 }}
                  onPress={() => {
                    props.onPress(icon);
                    setShowOverlay(false);
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </Overlay>
    </View>
  );
};

IconPickerOverlay.propTypes = {
  testID: PropTypes.string,
};

export default IconPickerOverlay;
