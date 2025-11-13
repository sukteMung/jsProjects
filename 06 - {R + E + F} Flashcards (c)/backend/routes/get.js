import express from "express";
import db from "../admin.js";

const router = express.Router();

router.get("/list", async (req, res) => {

    const decksRef = db.collection("FlashcardDecks");
    const decksSnap = await decksRef.get();

    const decks = [];
    decksSnap.forEach((doc) => {
        decks.push(doc.id);
    });

    // res.json( {decks} );
    res.send(decks);
})

router.get("/:deckId", async (req, res) => {

    const deckId = req.params.deckId;

    const deckRef = db.collection("FlashcardDecks").doc(deckId);
    const deckSnap = await deckRef.get();
    if (!deckSnap.exists) {
        console.log("No such document!");
        return res.status(404).send("Deck not found");
    }
    const deckData = deckSnap.data();

    res.json(deckData);
});

router.get("/:deckId/:cardId", async (req, res) => {

    const deckId = req.params.deckId;
    const cardId = req.params.cardId;

    const deckRef = db.collection("FlashcardDecks").doc(deckId);
    const deckSnap = await deckRef.get();
    if (!deckSnap.exists) {
        console.log("No such document!");
        return res.status(404).send("Deck not found");
    }
    
    const deckData = deckSnap.data();
    const cardData = deckData[cardId];
    
    res.json(cardData);
});

export default router;