import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./admin.js";
import { collection, getDocs } from "firebase/firestore/lite";


dotenv.config();
console.log("FIREBASE_PROJECT_ID:", process.env.FIREBASE_PROJECT_ID);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Test from backend!");
});

app.get("/FlashcardDecks", async (req, res) => {

    const flashcardDecks = db.collection("FlashcardDecks");
    const decksSnapshot = await flashcardDecks.get();
    const decksList = decksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(decksList);

    console.log("DecksSnapshot: ", decksSnapshot);
    console.log("DecksList: ", decksList);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 