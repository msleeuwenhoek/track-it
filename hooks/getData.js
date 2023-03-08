import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { database } from "../config/firebase";

async function getData(user, nestedCollection) {
  const results = [];

  const querySnapshot = await getDocs(
    collection(database, `users/${user}/${nestedCollection}`)
  );
  querySnapshot.forEach((doc) => {
    results.push({ id: doc.id, data: doc.data() });
  });

  return results;
}

export default getData;
