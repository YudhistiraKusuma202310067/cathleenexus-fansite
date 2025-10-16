import { useState } from "react";
import "./AdminPage.scss";
import { db, storage } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";


const AdminPage = () => {
  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    notes: "",
    songs: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "offairEvents"), {
        title: form.title,
        date: form.date,
        location: form.location,
        notes: form.notes || "-",
        songs: form.songs || "",
        imageUrl: form.imageUrl || "",
        createdAt: serverTimestamp(),
      });

      setMessage("✅ Event successfully added!");
      setForm({
        title: "",
        date: "",
        location: "",
        notes: "",
        songs: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("❌ Error adding event:", error);
      setMessage("❌ Failed to add event.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <UIScreenContainer>
      <div className="adminpage-container">
        <h1 className="adminpage-title">🛠️ Admin Panel - Add Off-Air Event</h1>

        <form onSubmit={handleSubmit} className="adminpage-form">
          <label>
            Event Title:
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Date:
            <input
              type="text"
              name="date"
              placeholder='e.g. "17-Jun-23" or "20 Oktober 2025"'
              value={form.date}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Location:
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Image URL:
            <input
              type="text"
              name="imageUrl"
              placeholder="Paste image link here (optional)"
              value={form.imageUrl}
              onChange={handleChange}
            />
          </label>

          <label>
            Notes (optional):
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows="3"
            />
          </label>

          <label>
            Songs (optional):
            <textarea
              name="songs"
              placeholder="List of songs (use line breaks)"
              value={form.songs}
              onChange={handleChange}
              rows="4"
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Event"}
          </button>
        </form>

        {message && (
          <p
            className={`adminpage-message ${
              message.includes("✅") ? "success" : "error"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </UIScreenContainer>
  );
};

export default AdminPage;