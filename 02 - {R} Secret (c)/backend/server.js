
import express from "express";
import cors from "cors";
import { addDocument, getDocument, listDocuments } from "./firestore.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes your React app will call
app.post("/add", async (req, res) => {
    const id = await addDocument("myCollection", req.body);
    res.json({ id });
});

app.get("/doc/:id", async (req, res) => {
    const data = await getDocument("myCollection", req.params.id);
    res.json({ data });
});

app.get("/list", async (req, res) => {
    const items = await listDocuments("myCollection");
    res.json({ items });
});

app.listen(4000, () =>
    console.log("🔥 Backend running on http://localhost:4000")
);
