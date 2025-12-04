// uploadMng.mjs
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, writeBatch, doc } from "firebase/firestore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Firebase config
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyAYPahY0rA7LYQEIgNKNDDuBw60rfZsuyU",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "nexus-web-bc725.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "nexus-web-bc725",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "nexus-web-bc725.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "664288166369",
  appId: process.env.FIREBASE_APP_ID || "1:664288166369:web:87cbe20c3083530b0c52a0",
};

// Initialize Firebase
let app, db;
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("✅ Firebase initialized successfully");
} catch (err) {
  console.error("❌ Firebase initialization failed:", err.message);
  process.exit(1);
}

// Load JSON file
function loadJsonData(filename) {
  try {
    const filePath = path.join(__dirname, filename);

    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    const rawData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(rawData);

    if (!Array.isArray(data)) {
      throw new Error("JSON data must be an array");
    }

    console.log(`📄 Loaded ${data.length} records from ${filename}`);
    return data;
  } catch (err) {
    console.error("❌ Failed to load JSON file:", err.message);
    process.exit(1);
  }
}

// Clean and format record
function cleanRecord(item) {
  return {
    title: item.name?.trim() || "Unknown Event",
    date: item.date?.trim() || "-",
    uploadedAt: new Date().toISOString(),
  };
}

// Batch upload
async function uploadWithBatch(data) {
  const colRef = collection(db, "mngEvents");
  const BATCH_SIZE = 500;
  let totalUploaded = 0;

  for (let i = 0; i < data.length; i += BATCH_SIZE) {
    const batch = writeBatch(db);
    const batchData = data.slice(i, i + BATCH_SIZE);

    for (const item of batchData) {
      const docRef = doc(colRef);
      batch.set(docRef, cleanRecord(item));
    }

    await batch.commit();
    totalUploaded += batchData.length;
    console.log(`📦 Batch uploaded: ${batchData.length}`);
  }

  return totalUploaded;
}

// Main function
async function uploadMng() {
  console.log("🚀 Starting upload M&G..");

  const start = Date.now();
  const filename = "/RecapMNG.json"; // <<< change to your actual json file
  const rawData = loadJsonData(filename);

  const totalUploaded = await uploadWithBatch(rawData);

  const duration = ((Date.now() - start) / 1000).toFixed(2);
  console.log("\n====================================");
  console.log("🎉 M&G Upload Complete");
  console.log(`📌 Uploaded: ${totalUploaded} documents`);
  console.log(`⏱ Duration: ${duration}s`);
  console.log("====================================");
  process.exit(0);
}

uploadMng().catch(err => {
  console.error("❌ Unexpected error:", err);
  process.exit(1);
});
