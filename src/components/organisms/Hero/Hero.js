import { View } from "react-native";
import PropTypes from "prop-types";
import HeroStyle from "./Hero.style";
import Label from "../../atoms/Label/Label";
import Header from "../../molecules/Header";
import { useContext } from "react";
import { DatabaseContext } from "../../../../contexts";
import { Divider } from "react-native-elements";

const Hero = (props) => {
  const { user } = useContext(DatabaseContext);

  return (
    <View testID={props.testID} style={HeroStyle.View}>
      <Header />
      <Divider style={HeroStyle.Divider} />
      <Label
        text={`Hi there, ${user?.displayName}`}
        additionalClasses={HeroStyle.Heading}
      />
    </View>
  );
};

Hero.propTypes = {
  testID: PropTypes.string,
};

export default Hero;
