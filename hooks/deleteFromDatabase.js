import {
  deleteDoc,
  doc,
  collection,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import { database } from "../config/firebase";

async function deleteFromDatabase(user, nestedCollection, docId) {
  deleteDoc(doc(database, `users/${user.uid}/${nestedCollection}/${docId}`))
    .then(() => {
      console.log("Entire Document has been deleted successfully.");
    })
    .catch((error) => {
      console.log(error);
    });
}
async function deleteAllFromDatabase(user, nestedCollection, category) {
  const q = query(
    collection(database, `users/${user.uid}/${nestedCollection}`),
    where("category", "==", category.data.name)
  );

  const snapshot = await getDocs(q);

  if (snapshot.size > 0) {
    snapshot.docs.forEach((doc) => {
      console.log(doc.ref);
      deleteDoc(doc.ref)
        .then(() => {
          console.log("All documents have been deleted successfully.");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
}

export default deleteFromDatabase;
export { deleteAllFromDatabase };
