import { addGoalToDatabase } from "../../../hooks";
import { editGoal } from "../../../hooks/editDatabase";

function handleSubmit(user, formData, docId) {
  let nameError = formData.name === "" ? "your goal needs a title" : "";

  let repetitionError =
    formData.repetition === ""
      ? "how often do you want to achieve this goal?"
      : "";
  let measuredByError = formData.measuredBy === "" ? "what is your goal?" : "";
  let amountError = formData.amount === "" ? "please fill in an amount" : "";
  let specificityError =
    formData.specificity === ""
      ? "do you want to track all activity or a specific subcategory"
      : "";
  let categoryError =
    formData.category === "" ? "to which activity is your goal related?" : "";

  const errors = {
    nameError,
    amountError,
    categoryError,
    repetitionError,
    measuredByError,
    specificityError,
  };

  if (
    (user !== null,
    formData.name !== "" &&
      formData.measuredBy !== "" &&
      formData.repetition !== "" &&
      formData.category !== "" &&
      formData.amount !== "" &&
      formData.specificity !== "" &&
      nameError === "" &&
      measuredByError === "" &&
      repetitionError === "" &&
      amountError === "" &&
      categoryError === "" &&
      specificityError === "")
  ) {
    if (docId !== null) {
      editGoal(user, "goals", formData, docId);
    } else {
      addGoalToDatabase(user, "goals", formData);
    }
    let results = { submitted: true, errors: errors };
    return results;
  } else {
    let results = { submitted: false, errors: errors };
    return results;
  }
}

export default handleSubmit;
