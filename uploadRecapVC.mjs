// uploadRecapVC.mjs
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, writeBatch, doc } from "firebase/firestore";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load Firebase config (environment or fallback)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY || "AIzaSyAYPahY0rA7LYQEIgNKNDDuBw60rfZsuyU",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN || "nexus-web-bc725.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID || "nexus-web-bc725",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "nexus-web-bc725.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "664288166369",
  appId: process.env.FIREBASE_APP_ID || "1:664288166369:web:87cbe20c3083530b0c52a0",
};

let app, db;

// ✅ Initialize Firebase
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  console.log("✅ Firebase initialized successfully");
} catch (err) {
  console.error("❌ Firebase initialization failed:", err.message);
  process.exit(1);
}

// ✅ Load and validate JSON file
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

    console.log(`✅ Loaded ${data.length} records from ${filename}`);
    return data;
  } catch (err) {
    console.error("❌ Failed to load JSON file:", err.message);
    process.exit(1);
  }
}

// ✅ Clean and normalize record (UPDATED for new format)
function cleanRecord(item) {
  // Skip incomplete data
  if (!item["Nama Photobook"] || item["Nama Photobook"].trim() === "") {
    return null;
  }

  // Helper to safely trim or fallback
  const cleanString = (value, fallback = "-") => {
    if (!value) return fallback;
    const trimmed = String(value).trim();
    return trimmed === "" ? fallback : trimmed;
  };

  return {
    no: cleanString(item["No"]),
    date: cleanString(item["Tanggal - Bulan"]),
    photobook: cleanString(item["Nama Photobook"]),
    session: cleanString(item["Sesi"]),
    totalSession: cleanString(item["Total sesi"]),
    sessionEntry: cleanString(item["Sesi masuk"]), // 🆕 baru ditambahkan
    time: cleanString(item["Jam"]), // 🆕 ganti dari "Jam - Sesi" ke "Jam"
    extra: cleanString(item["Tambahan"]),
    uploadedAt: new Date().toISOString(),
  };
}


// ✅ Upload using Firestore batched writes (efficient for large data)
async function uploadWithBatch(data) {
  const colRef = collection(db, "recapVC");
  const BATCH_SIZE = 500;
  let totalUploaded = 0;
  let totalFailed = 0;

  for (let i = 0; i < data.length; i += BATCH_SIZE) {
    const batch = writeBatch(db);
    const batchData = data.slice(i, i + BATCH_SIZE);
    let batchCount = 0;

    for (const item of batchData) {
      const cleanItem = cleanRecord(item);
      if (!cleanItem) continue;

      const docRef = doc(colRef);
      batch.set(docRef, cleanItem);
      batchCount++;
    }

    try {
      await batch.commit();
      totalUploaded += batchCount;
      console.log(`✅ Batch ${Math.floor(i / BATCH_SIZE) + 1}: Uploaded ${batchCount} records`);
    } catch (err) {
      totalFailed += batchCount;
      console.error(`❌ Batch ${Math.floor(i / BATCH_SIZE) + 1} failed:`, err.message);
    }

    // Small delay between batches to avoid throttling
    if (i + BATCH_SIZE < data.length) {
      await new Promise((r) => setTimeout(r, 100));
    }
  }

  return { totalUploaded, totalFailed };
}

// ✅ Alternative: Upload one by one (useful for debugging)
async function uploadIndividually(data) {
  const colRef = collection(db, "recapVC");
  let totalUploaded = 0;
  let totalFailed = 0;

  for (let i = 0; i < data.length; i++) {
    const cleanItem = cleanRecord(data[i]);
    if (!cleanItem) continue;

    try {
      await addDoc(colRef, cleanItem);
      totalUploaded++;
      console.log(`✅ [${i + 1}/${data.length}] Uploaded: ${cleanItem.photobook}`);
    } catch (err) {
      totalFailed++;
      console.error(`❌ [${i + 1}/${data.length}] Failed: ${cleanItem.photobook}`, err.message);
    }

    if ((i + 1) % 10 === 0) {
      await new Promise((r) => setTimeout(r, 100));
    }
  }

  return { totalUploaded, totalFailed };
}

// ✅ Main upload function
async function uploadRecapVC() {
  console.log("🚀 Starting upload process for Recap VC...\n");

  const startTime = Date.now();

  const filename = "\RecapVCCat.json"; // ⚙️ Adjust file path if needed
  const rawData = loadJsonData(filename);

  const useBatch = process.env.USE_BATCH !== "false";

  const { totalUploaded, totalFailed } = useBatch
    ? await uploadWithBatch(rawData)
    : await uploadIndividually(rawData);

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  console.log("\n" + "=".repeat(50));
  console.log("🎉 Recap VC Upload Complete!");
  console.log(`✅ Successfully uploaded: ${totalUploaded}`);
  console.log(`❌ Failed: ${totalFailed}`);
  console.log(`⏱️ Duration: ${duration}s`);
  console.log("=".repeat(50));

  process.exit(0);
}

// ✅ Execute the upload
uploadRecapVC().catch((err) => {
  console.error("❌ Unexpected error:", err);
  process.exit(1);
});
