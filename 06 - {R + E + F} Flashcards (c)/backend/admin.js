// admin.js
import admin from "firebase-admin";
import fs from "fs";

// Load the service account key JSON file
const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));

// Initialize the admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Export the Firestore database instance
const db = admin.firestore();
export default db;
