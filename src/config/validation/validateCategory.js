import { addCategoryToDatabase } from "../../../hooks";
import { editCategory } from "../../../hooks/editDatabase";

function handleSubmit(user, formData, docId) {
  let nameError = formData.name === "" ? "your category needs a name" : "";
  let unitError = formData.unit === "" ? "please pick a measurement unit" : "";

  let themeColorError = formData.themeColor === "" ? "pick a theme color" : "";
  let iconError = formData.icon.icon === "" ? "pick an icon" : "";

  const errors = {
    nameError,
    unitError,
    themeColorError,
    iconError,
  };

  if (
    (user !== null,
    formData.name !== "" &&
      formData.unit !== "" &&
      formData.themeColor !== "" &&
      formData.icon.icon !== "" &&
      nameError === "" &&
      unitError === "" &&
      themeColorError === "" &&
      iconError === "")
  ) {
    if (docId !== null) {
      editCategory(user, "categories", formData, docId);
    } else {
      addCategoryToDatabase(user, "categories", formData);
    }

    let results = { submitted: true, errors: errors };
    return results;
  } else {
    let results = { submitted: false, errors: errors };
    return results;
  }
}

export default handleSubmit;
