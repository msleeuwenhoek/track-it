import { addActivityToDatabase } from "../../../hooks";
import { editActivity } from "../../../hooks/editDatabase";

function handleSubmit(user, formData, docId, selectedCategory) {
  let categoryError =
    formData.category === "" ? "what activity do you want to add?" : "";
  let amountError =
    formData.amount === "" ? "please indicate the duration/amount" : "";

  let subcategoryError =
    selectedCategory.data.subcategories.length > 0 &&
    formData.subcategory === ""
      ? "please select a subcategory"
      : "";

  const errors = {
    amountError,
    categoryError,
    subcategoryError,
  };

  if (
    (user !== null,
    formData.category !== "" &&
      formData.amount !== "" &&
      categoryError === "" &&
      subcategoryError === "" &&
      amountError === "")
  ) {
    if (docId !== null) {
      editActivity(user, "activities", formData, docId);
    } else {
      addActivityToDatabase(user, "activities", formData);
    }

    let results = { submitted: true, errors: errors };
    return results;
  } else {
    let results = { submitted: false, errors: errors };
    return results;
  }
}

export default handleSubmit;
