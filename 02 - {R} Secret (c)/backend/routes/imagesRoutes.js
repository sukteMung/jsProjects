import express from "express";
import { db, __COLLECTION__ } from "../firestore.js";

const router = express.Router();

const getUrls = async () => {
    const docRef = db.collection(__COLLECTION__).doc("images");
    const snap = await docRef.get();

    if (!snap.exists) return [];

    const data = snap.data();
    return Object.values(data); // return array of URLs
};

router.get("/", async (req, res) => {
    try {
        const urls = await getUrls();
        res.json(urls);
    } catch (error) {
        console.error("GET /images error:", error);
        res.status(500).json({ error: "Failed to fetch images" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { url, description } = req.body;

        if (!url || !description) {
            return res.status(400).json({ error: "Image URL and description are required" });
        }

        const docRef = db.collection(__COLLECTION__).doc("images");
        const snap = await docRef.get();

        let data = snap.exists ? snap.data() : {};

        // ---- Create KEY: "<description> MM-DD-YY" ----
        const date = new Date();
        const mm = String(date.getMonth() + 1).padStart(2, "0");
        const dd = String(date.getDate()).padStart(2, "0");
        const yy = String(date.getFullYear()).slice(-2);

        const key = `${description} ${mm}-${dd}-${yy}`;  // 🔥 description inside the key

        data[key] = url;

        await docRef.set(data, { merge: true });

        res.json({ key, url, description });

    } catch (error) {
        res.status(500).json({ error: "Failed to add image" });
    }
});

export default router;