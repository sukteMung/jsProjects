import express from "express";
import cors from "cors";

import mainRouter from "./routes/router.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/FlashcardDecks", mainRouter);

app.get("/", (req, res) => {
    res.send("Test from backend!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));