import { db } from "./src/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import fs from "fs";

const offairData = JSON.parse(fs.readFileSync("/Rekap Cathy offair.json", "utf8"));

const uploadOffair = async () => {
  const colRef = collection(db, "offairEvents");

  for (const item of offairData) {
    if (!item.Acara) continue;
    await addDoc(colRef, {
      date: item.Tanggal,
      title: item.Acara,
      location: item.Lokasi,
      type: item.Tipe,
      notes: item.Catatan,
      songs: item["LIST SONG"],
    });
    console.log(`✅ Uploaded: ${item.Acara}`);
  }

  console.log("🎉 All data uploaded successfully!");
  process.exit(0);
};

uploadOffair().catch((err) => {
  console.error("❌ Upload failed:", err);
  process.exit(1);
});
