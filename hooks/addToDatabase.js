import { addDoc, collection } from "firebase/firestore";
import { database } from "../config/firebase";

const addActivityToDatabase = (user, nestedCollection, data) => {
  addDoc(collection(database, `users/${user.uid}/${nestedCollection}`), {
    category: data.category,
    subcategory: data.subcategory,
    date: data.date,
    amount: data.amount,
  })
    .then(() => {
      console.log("data submitted");
    })
    .catch((error) => {
      console.log(error);
    });
};

const addGoalToDatabase = (user, nestedCollection, data) => {
  addDoc(collection(database, `users/${user.uid}/${nestedCollection}`), {
    name: data.name,
    measuredBy: data.measuredBy,
    repetition: data.repetition,
    amount: data.amount,
    category: data.category,
    specificity: data.specificity,
    stayBelow: data.stayBelow,
  })
    .then(() => {
      console.log("data submitted");
    })
    .catch((error) => {
      console.log(error);
    });
};
const addMoodToDatabase = (user, nestedCollection, data) => {
  addDoc(collection(database, `users/${user.uid}/${nestedCollection}`), {
    rating: data.rating,
    date: data.date,
    note: data.note,
  })
    .then(() => {
      console.log("data submitted");
    })
    .catch((error) => {
      console.log(error);
    });
};

const addCategoryToDatabase = (user, nestedCollection, data) => {
  const subcategories = data.subcategories.filter((subcategory) => {
    return subcategory !== "";
  });
  addDoc(collection(database, `users/${user.uid}/${nestedCollection}`), {
    name: data.name,
    icon: { icon: data.icon.icon, type: data.icon.type },
    themeColor: data.themeColor,
    unit: data.unit === "no unit" ? "" : data.unit,
    subcategories: subcategories,
  })
    .then(() => {
      console.log("data submitted");
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  addActivityToDatabase,
  addGoalToDatabase,
  addMoodToDatabase,
  addCategoryToDatabase,
};
