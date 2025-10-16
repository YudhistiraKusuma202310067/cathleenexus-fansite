import { useEffect, useState } from "react";
import "./RecapVC.scss";
import UIScreenContainer from "../../../components/UIScreenContainer/UIScreenContainer";
import { db } from "@/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const RecapVC = () => {
  const [eventsByYear, setEventsByYear] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecapVC = async () => {
      try {
        const q = query(collection(db, "recapVC"), orderBy("date", "desc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        // 🗓️ Parse date string like "Sabtu, 20 Mei 2023"
        const parseDate = (str) => {
          const monthMap = {
            // 🇮🇩 Indonesian months
            Januari: 0, Februari: 1, Maret: 2, April: 3, Mei: 4, Juni: 5,
            Juli: 6, Agustus: 7, September: 8, Oktober: 9, November: 10, Desember: 11,

            // 🇬🇧 English months
            January: 0, February: 1, March: 2, May: 4, June: 5,
            July: 6, August: 7, October: 9, December: 11,
          };


          try {
            const parts = str.split(" ");
            const day = parseInt(parts[1]);
            const monthName = parts[2];
            const year = parseInt(parts[3]);
            if (!monthMap.hasOwnProperty(monthName)) return null;
            return new Date(year, monthMap[monthName], day);
          } catch {
            return null;
          }
        };

                        // Parse and sort data
                const sorted = data
                .map((e) => ({
                    ...e,
                    parsedDate: parseDate(e.date || e["Tanggal - Bulan"] || "-"),
                }))
                .filter((e) => e.parsedDate && !isNaN(e.parsedDate))
                .sort((a, b) => b.parsedDate - a.parsedDate);

                // 🧩 Combine entries that share the same date
                const combinedByDate = sorted.reduce((acc, curr) => {
                const key = curr.date || curr["Tanggal - Bulan"] || "Unknown Date";
                if (!acc[key]) {
                    acc[key] = {
                    ...curr,
                    photobook: [curr.photobook || "-"],
                   sessions: [
                    {
                        sessionEntry: curr.sessionEntry || "-", // ✅ Use sessionEntry
                        time: curr.time || "-",
                        extra: curr.extra || "-",
                        totalSession: curr.totalSession || "-",
                    },
                    ],
                    };
                } else {
                    if (curr.photobook && !acc[key].photobook.includes(curr.photobook)) {
                    acc[key].photobook.push(curr.photobook);
                    }
                    acc[key].sessions.push({
                    sessionEntry: curr.sessionEntry || "-",
                    time: curr.time || "-",
                    extra: curr.extra || "-",
                    totalSession: curr.totalSession || "-",
                    });

                }
                return acc;
                }, {});

                // Convert combined object back into array
                const combined = Object.values(combinedByDate);

                // Group by year-month
                const grouped = combined.reduce((acc, event) => {
                const year = event.parsedDate.getFullYear();
                const month = event.parsedDate.toLocaleString("default", { month: "long" });
                if (!acc[year]) acc[year] = {};
                if (!acc[year][month]) acc[year][month] = [];
                acc[year][month].push(event);
                return acc;
                }, {});

                setEventsByYear(grouped);


      } catch (err) {
        console.error("❌ Error fetching recap VC:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecapVC();
  }, []);

  if (loading) {
    return (
      <UIScreenContainer>
        <div className="recapvc-loading">Loading Recap VC...</div>
      </UIScreenContainer>
    );
  }

  return (
    <UIScreenContainer>
      <div className="recapvc-container">
        <h1 className="recapvc-title">📸 Recap VC Cathy JKT48</h1>

        {/* 🗓️ Grouped by Year and Month */}
        {Object.keys(eventsByYear)
          .sort((a, b) => b - a)
          .map((year) => (
            <div key={year} className="recapvc-year-section">
              <h2 className="recapvc-year-title">{year}</h2>

              {Object.keys(eventsByYear[year])
                .sort(
                  (a, b) =>
                    new Date(`${b} 1, ${year}`) - new Date(`${a} 1, ${year}`)
                )
                .map((month) => (
                  <div key={month} className="recapvc-month-section">
                    <h3 className="recapvc-month-title">{month}</h3>

                    <div className="recapvc-table-wrapper">
                    <table className="recapvc-table">
                        <thead>
                        <tr>
                            <th>Hari - Tanggal</th>
                            <th>Sesi Masuk</th>
                            <th>Jam</th>
                            <th>Nama Photobook</th>
                        </tr>
                        </thead>
                        <tbody>
                        {eventsByYear[year][month].map((event) => {
  // Make sure sessions are sorted numerically (Sesi 1, 2, 3...)
                            const sessions = (event.sessions || [
                                { sessionEntry: event.sessionEntry || "-", time: event.time || "-" },
                            ]).sort((a, b) => {
                                const getNumber = (str) => {
                                if (!str) return 0;
                                const match = str.match(/\d+/);
                                return match ? parseInt(match[0]) : 0;
                                };
                                return getNumber(a.sessionEntry) - getNumber(b.sessionEntry);
                            });

                            return sessions.map((s, i) => (

                            <tr key={`${event.id}-${i}`}>
                                {i === 0 && (
                                <td
                                    className="recapvc-td-date"
                                    rowSpan={sessions.length}
                                >
                                    {event.date || "-"}
                                </td>
                                )}
                                <td className="recapvc-td-session-entry">
                                {s.sessionEntry || s.session || "-"}
                                </td>
                                <td className="recapvc-td-time">{s.time || event.time || "-"}</td>
                                {i === 0 && (
                                <td
                                    className="recapvc-td-photobook"
                                    rowSpan={sessions.length}
                                >
                                    {event.photobook?.join(", ") || "-"}
                                </td>
                                )}
                            </tr>
                            ));
                        })}
                        </tbody>
                    </table>
                    </div>



                  </div>
                ))}
            </div>
          ))}

        {Object.keys(eventsByYear).length === 0 && (
          <p className="recapvc-empty">No Recap VC data found 💭</p>
        )}
      </div>
    </UIScreenContainer>
  );
};

export default RecapVC;
