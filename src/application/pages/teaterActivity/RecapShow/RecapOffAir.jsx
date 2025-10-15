import { useEffect, useState } from "react";
import "./RecapOffAir.scss";
import UIScreenContainer from "../../../components/UIScreenContainer/UIScreenContainer";
import { db } from "@/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const RecapOffAir = () => {
  const [eventsByYear, setEventsByYear] = useState({});
  const [nextEvent, setNextEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "offairEvents"), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

      
        const parseDate = (str) => {
          if (!str || str === "-") return null;

          try {
            // Handle formats like "17-Jun-23" or "17-Jun-2023"
            if (str.includes("-")) {
              const [day, monthStr, yearStr] = str.split("-");
              const monthMap = {
                Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
                Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
              };
              const month = monthMap[monthStr.substring(0, 3)];
              const fullYear = yearStr.length === 2 ? `20${yearStr}` : yearStr;
              return new Date(fullYear, month, parseInt(day));
            }

            // Handle Indonesian full month names ("20 Oktober 2025")
            const monthNames = {
              Januari: 0, Februari: 1, Maret: 2, April: 3, Mei: 4, Juni: 5,
              Juli: 6, Agustus: 7, September: 8, Oktober: 9, November: 10, Desember: 11,
            };
            const [day, monthName, year] = str.split(" ");
            return new Date(year, monthNames[monthName], parseInt(day));
          } catch {
            return null;
          }
        };


        // Add parsed date and sort ascending
        const sorted = data
          .map((e) => ({ ...e, parsedDate: parseDate(e.date) }))
          .filter((e) => e.parsedDate instanceof Date && !isNaN(e.parsedDate))
          .sort((a, b) => a.parsedDate - b.parsedDate);

        // Group by year
        const grouped = sorted.reduce((acc, event) => {
          const year = event.parsedDate.getFullYear();
          if (!acc[year]) acc[year] = [];
          acc[year].push(event);
          return acc;
        }, {});

        // Find next upcoming event
        const today = new Date();
        const upcoming = sorted.find((e) => e.parsedDate >= today);
        setNextEvent(upcoming || null);

        setEventsByYear(grouped);
      } catch (error) {
        console.error("❌ Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <UIScreenContainer>
        <div className="recapoffair-loading">Loading events...</div>
      </UIScreenContainer>
    );
  }

  return (
    <UIScreenContainer>
      <div className="recapoffair-container">
        <h1 className="recapoffair-title">Off-Air Cathy JKT48</h1>

        {/* 🌟 Next Upcoming Event */}
        {nextEvent && (
          <div className="next-event-highlight">
            <h2>🎉 Next Event</h2>
            <div className="next-event-card">
              <img
                src={nextEvent.imageUrl || "/src/assets/TeaterActivity/cathy-offair.jpeg"}
                alt={nextEvent.title}
                className="next-event-image"
              />
              <div className="next-event-info">
                <h3>{nextEvent.title}</h3>
                <p>📅 {nextEvent.date}</p>
                <p>📍 {nextEvent.location}</p>
                {nextEvent.notes && <p>📝 {nextEvent.notes}</p>}
              </div>
            </div>
          </div>
        )}

        {/* 📅 Grouped by Year */}
        {Object.keys(eventsByYear)
          .sort((a, b) => b - a)
          .map((year) => (
            <div key={year} className="recapoffair-year-section">
              <h2 className="recapoffair-year-title">{year}</h2>
              <div className="recapoffair-grid">
                {eventsByYear[year].map((event) => (
                  <div key={event.id} className="recapoffair-card">
                    <img
                      src={event.imageUrl || "/src/assets/TeaterActivity/cathy-offair.jpeg"}
                      alt={event.title}
                      className="recapoffair-image"
                      onError={(e) => {
                        e.target.src = "/src/assets/TeaterActivity/cathy-offair.jpeg";
                      }}
                    />
                    <div className="recapoffair-content">
                      <h3 className="recapoffair-event-title">{event.title}</h3>
                      <p className="recapoffair-date">
                        📅 {event.date} — 📍 {event.location}
                      </p>
                      {event.notes && (
                        <p className="recapoffair-notes">📝 {event.notes}</p>
                      )}
                      {event.songs && (
                        <pre className="recapoffair-songs">{event.songs}</pre>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        {Object.keys(eventsByYear).length === 0 && (
          <p className="recapoffair-empty">
            No Off-Air events found at the moment 💭
          </p>
        )}
      </div>
    </UIScreenContainer>
  );
};

export default RecapOffAir;
