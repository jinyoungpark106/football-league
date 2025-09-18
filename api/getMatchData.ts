import type { VercelRequest, VercelResponse } from '@vercel/node';
import { doc, getDoc } from "firebase/firestore";
import {db} from "../firebase";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { teamId } = req.query;

  console.log('teamId: ', teamId);

  if (!teamId) {
    res.status(400).json({ error: "teamId required" });
    return;
  }

  const docRef = doc(db, "premier-league", "2025-2026", "team", "liverpool");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const matchData = docSnap.data().matches;
    if (matchData) {
      const {matches} = docSnap.data();
      res.status(200).json(matches);
    } else {
      res.status(404).json({ error: "Not Found" });
      return;
    }
  }
  if (!docSnap.exists()) {
    res.status(404).json({ error: "Not Found" });
    return;
  }
}