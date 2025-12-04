import { useEffect, useState } from "react";
import "./RecapMNG.scss"; 
import UIScreenContainer from "../../../components/UIScreenContainer/UIScreenContainer";
import { db } from "@/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const RecapMNG = () => {
  const [eventsByYear, setEventsByYear] = useState({});
  const [nextEvent, setNextEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const q = query(collection(db, "mngEvents"), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // ✅ Robust Date Parser (supports ALL formats)
        const parseDate = (str) => {
          if (!str || str === "-") return null;

          // ✅ Try native parser first (supports: "11 May 2024", "2024-05-11")
          const native = new Date(str);
          if (!isNaN(native)) return native;

          try {
            // ✅ Format: 11-May-24
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

            // ✅ Indonesian + English Full Month Support
            const monthNames = {
              Januari: 0, Februari: 1, Maret: 2, April: 3, Mei: 4, Juni: 5,
              Juli: 6, Agustus: 7, September: 8, Oktober: 9, November: 10, Desember: 11,
              January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
              July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
            };

            const [day, monthName, year] = str.split(" ");
            return new Date(year, monthNames[monthName], parseInt(day));
          } catch {
            return null;
          }
        };

        // ✅ Prepare events (NO FILTERING OUT EVENTS anymore)
        const prepared = data.map((e) => ({
          ...e,
          parsedDate: parseDate(e.date), // may be null and that's OK
        }));

        // ✅ Safe sorting (null dates go to bottom)
        const sorted = prepared.sort((a, b) => {
          if (!a.parsedDate) return 1;
          if (!b.parsedDate) return -1;
          return a.parsedDate - b.parsedDate;
        });

        // ✅ Group by year (fallback to "Unknown")
        const grouped = sorted.reduce((acc, event) => {
          const year = event.parsedDate
            ? event.parsedDate.getFullYear()
            : "Unknown";

          if (!acc[year]) acc[year] = [];
          acc[year].push(event);
          return acc;
        }, {});

        // ✅ Safe Next Event detection
        const today = new Date();
        const upcoming = sorted.find(
          (e) => e.parsedDate && e.parsedDate >= today
        );

        setNextEvent(upcoming || null);
        setEventsByYear(grouped);
      } catch (error) {
        console.error("❌ Error fetching MNG events:", error);
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
        <h1 className="recapoffair-title">M&amp;G Cathy JKT48</h1>

        {/* ✅ Next Event */}
        {nextEvent && (
          <div className="next-event-highlight">
            <h2>🎉 Next Event</h2>
            <div className="next-event-card">
              <img
                src={
                  nextEvent.imageUrl ||
                  "/src/assets/TeaterActivity/cathy-offair.jpeg"
                }
                alt={nextEvent.title}
                className="next-event-image"
              />
              <div className="next-event-info">
                <h3>{nextEvent.title}</h3>
                <p>📅 {nextEvent.date}</p>
              </div>
            </div>
          </div>
        )}

        {/* ✅ Grouped by Year */}
        {Object.keys(eventsByYear)
          .sort((a, b) => (b === "Unknown" ? -1 : b - a))
          .map((year) => (
            <div key={year} className="recapoffair-year-section">
              <h2 className="recapoffair-year-title">{year}</h2>
              <div className="recapoffair-grid">
                {eventsByYear[year].map((event) => (
                  <div key={event.id} className="recapoffair-card">
                    <img
                      src={
                        event.imageUrl ||
                        "/src/assets/TeaterActivity/cathy-offair.jpeg"
                      }
                      alt={event.title}
                      className="recapoffair-image"
                    />
                    <div className="recapoffair-content">
                      <h3 className="recapoffair-event-title">
                        {event.title}
                      </h3>
                      <p>📅 {event.date || "No Date"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        {/* ✅ Empty State (now extremely unlikely) */}
        {Object.keys(eventsByYear).length === 0 && (
          <p className="recapoffair-empty">
            No M&amp;G events found 💭
          </p>
        )}
      </div>
    </UIScreenContainer>
  );
};

export default RecapMNG;
