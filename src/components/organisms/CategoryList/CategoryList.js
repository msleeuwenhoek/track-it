import {
  View,
  Text,
  useWindowDimensions,
  Modal,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import CategoryListStyle from "./CategoryList.style";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { DatabaseContext } from "../../../../contexts";
import { Icon } from "react-native-elements";
import Button from "../../atoms/Button/Button";
import DeleteOverlayWarning from "../DeleteOverlayWarning/DeleteOverlayWarning";
import deleteFromDatabase, {
  deleteAllFromDatabase,
} from "../../../../hooks/deleteFromDatabase";
import FormModal from "../FormModal/FormModal";
import BottomModal from "../BottomModal/BottomModal";
import getData from "../../../../hooks/getData";
import LoadingOverlay from "../LoadingOverlay/LoadingOverlay";

const CategoryList = (props) => {
  const { categories, isLoaded, user, setCategories } =
    useContext(DatabaseContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const { height, width } = useWindowDimensions();
  const [showLoading, setShowLoading] = useState(false);

  async function deleteCategory(category) {
    setShowLoading(true);
    await deleteAllFromDatabase(user, "activities", category);
    await deleteAllFromDatabase(user, "goals", category);
    await deleteFromDatabase(user, "categories", category.id);
    const newCategories = await getData(user.uid, "categories");
    setCategories(newCategories);
    setShowLoading(false);
  }
  if (isLoaded) {
    return (
      <View testID={props.testID} style={CategoryListStyle.View}>
        <View style={CategoryListStyle.FlexRow}>
          {categories.map((category) => {
            return (
              <TouchableOpacity
                activeOpacity={props.page === "AccountSetup" ? 1 : 0.2}
                key={category.id}
                onPress={() => {
                  if (props.page !== "AccountSetup") {
                    navigation.navigate("Add", {
                      action: "Edit",
                      type: "category",
                      data: category,
                    });
                  }
                }}
                style={[
                  CategoryListStyle.Category,
                  {
                    width: (width - 80) / 2,
                    backgroundColor: category.data.themeColor,
                  },
                ]}
              >
                <Button
                  icon="cross"
                  type="entypo"
                  size={32}
                  style={CategoryListStyle.ExitButton}
                  onPress={() => {
                    if (props.page === "AccountSetup") {
                      deleteCategory(category);
                    } else {
                      setSelectedCategory(category);
                      setOverlayIsVisible(true);
                    }
                  }}
                />
                <Icon
                  name={category.data.icon.icon}
                  type={category.data.icon.type}
                  size={32}
                />
                <Text style={CategoryListStyle.Text}>{category.data.name}</Text>
              </TouchableOpacity>
            );
          })}

          <Button
            icon="add"
            style={[CategoryListStyle.Category, { width: (width - 80) / 2 }]}
            type="ionicon"
            size={32}
            onPress={() => {
              if (props.page === "AccountSetup") {
                setIsVisible(true);
              } else {
                navigation.navigate("Add", { type: "category" });
              }
            }}
          />
        </View>

        {selectedCategory !== "" && (
          <BottomModal
            isVisible={overlayIsVisible}
            setIsVisible={() => {
              setOverlayIsVisible(false);
            }}
            child={
              <DeleteOverlayWarning
                category={selectedCategory}
                setIsVisible={() => {
                  setOverlayIsVisible(false);
                }}
              />
            }
          />
        )}
        <Modal visible={isVisible} transparent style={{ position: "relative" }}>
          <FormModal
            onPress={() => {
              setIsVisible(false);
            }}
          />
        </Modal>
        <LoadingOverlay isVisible={showLoading} />
      </View>
    );
  } else {
    return null;
  }
};

CategoryList.propTypes = {
  testID: PropTypes.string,
};

export default CategoryList;
