import { addMoodToDatabase } from "../../../hooks";
import { editMood } from "../../../hooks/editDatabase";

function handleSubmit(user, formData, docId) {
  let noteError = formData.note === "" ? "please fill in a note" : "";

  const errors = {
    noteError,
  };

  if ((user !== null, formData.note !== "" && noteError === "")) {
    if (docId !== null) {
      editMood(user, "moods", formData, docId);
    } else {
      addMoodToDatabase(user, "moods", formData);
    }

    let results = { submitted: true, errors: errors };
    return results;
  } else {
    let results = { submitted: false, errors: errors };
    return results;
  }
}

export default handleSubmit;
