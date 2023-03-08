import { updateDoc, doc } from "firebase/firestore";
import { database } from "../config/firebase";

function editGoal(user, nestedCollection, data, docId) {
  updateDoc(doc(database, `users/${user.uid}/${nestedCollection}/${docId}`), {
    name: data.name,
    measuredBy: data.measuredBy,
    repetition: data.repetition,
    amount: data.amount,
    category: data.category,
    specificity: data.specificity,
    stayBelow: data.stayBelow,
  })
    .then(() => {
      console.log("Document has been edited successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
}
function editActivity(user, nestedCollection, data, docId) {
  updateDoc(doc(database, `users/${user.uid}/${nestedCollection}/${docId}`), {
    category: data.category,
    subcategory: data.subcategory,
    date: data.date,
    amount: data.amount,
  })
    .then(() => {
      console.log("Document has been edited successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
}
function editMood(user, nestedCollection, data, docId) {
  updateDoc(doc(database, `users/${user.uid}/${nestedCollection}/${docId}`), {
    rating: data.rating,
    date: data.date,
    note: data.note,
  })
    .then(() => {
      console.log("Document has been edited successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
}

function editCategory(user, nestedCollection, data, docId) {
  const subcategories = data.subcategories.filter((subcategory) => {
    return subcategory !== "";
  });
  updateDoc(doc(database, `users/${user.uid}/${nestedCollection}/${docId}`), {
    name: data.name,
    icon: { icon: data.icon.icon, type: data.icon.type },
    themeColor: data.themeColor,
    subcategories: subcategories,
  })
    .then(() => {
      console.log("Document has been edited successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
}
export { editGoal, editActivity, editMood, editCategory };
