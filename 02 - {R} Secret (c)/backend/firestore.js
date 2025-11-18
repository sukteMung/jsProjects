import express from "express";
import admin from "firebase-admin";
import cors from "cors";
import serviceAccount from "./serviceAccountKey.json" assert { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors());
app.use(express.json());

// Example protected route
app.post("/createUser", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await admin.auth().createUser({ email, password });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(4000, () => console.log("Admin API running on port 4000"));