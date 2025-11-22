import express from "express";
import { db, __COLLECTION__ } from "./firestore.js";

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const docRef = db.collection(__COLLECTION__).doc("images");
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            return res.status(404).json({ error: "No images found" });
        }

        const data = docSnap.data();

        const urls = Object.values(data);
        res.json(urls);
    } catch (error) {
        console.error(err);
        res.status(500).json("Error while fetching images");
    }
});