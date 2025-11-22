import express from "express";
import cors from "cors";
import imagesRoutes from "../routes/imagesRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", imagesRoutes);
app.use("/quotes", quotesRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
