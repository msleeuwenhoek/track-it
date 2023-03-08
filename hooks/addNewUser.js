import { setDoc, doc } from "firebase/firestore";
import { database } from "../config/firebase";

async function addNewUser(user, name) {
  setDoc(doc(database, "users", user.uid), {
    firstName: name,
  })
    .then(() => {
      console.log("user created ");
    })
    .catch((error) => {
      console.log(error);
    });
}

export default addNewUser;
