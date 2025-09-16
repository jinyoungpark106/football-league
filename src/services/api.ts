import {db} from "../../firebase";
import {doc, getDoc} from "firebase/firestore";

export const getMatches = async (id: string) => {
  const docRef = doc(db, "premier-league", "2025-2026", "team", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const matchData = docSnap.data().matches;
    if (matchData) {
      const {matches} = docSnap.data();
      return JSON.parse(matches);
    } else {
      return [];
    }
  }
  return [];
};
