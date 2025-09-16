import {db} from "../../firebase";
import {doc, getDoc} from "firebase/firestore";
import axios from "axios";

// use proxy for CORS
export const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {"X-Auth-Token": import.meta.env.VITE_FOOTBALL_API_KEY},
});

export const getStandings = async () => {
  try {
    const res = await api.get("/PL/standings"); // GET /standings
    console.log("GET standings:", res.data);
    return res.data;
  } catch (error) {
    console.error("GET error:", error);
    return null;
  }
};

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
