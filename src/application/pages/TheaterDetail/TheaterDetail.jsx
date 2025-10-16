import { useEffect, useState } from "react";

export default function TheaterDetail() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllDetails() {
      try {
        // 1️⃣ Ambil semua show ID dari API pertama
        const res = await fetch("https://cathleenexus-fansite.vercel.app/api/theater");
        if (!res.ok) throw new Error("Gagal fetch list show");
        const theaterList = await res.json();

        // 2️⃣ Loop ID dan fetch detail per show
        const detailPromises = theaterList.map(async (show) => {
          try {
            const detailRes = await fetch(
              `https://cathleenexus-fansite.vercel.app/api/theater/${show.id}`
            );
            if (!detailRes.ok) throw new Error(`Gagal fetch show ${show.id}`);
            const detailData = await detailRes.json();
            return detailData;
          } catch (err) {
            console.error(`Error show ${show.id}:`, err);
            return null;
          }
        });

        // 3️⃣ Tunggu semua selesai
        const details = await Promise.all(detailPromises);
        const validDetails = details.filter((d) => d !== null);

        setShows(validDetails);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAllDetails();
  }, []);

  if (loading) return <p>⏳ Mengambil data teater...</p>;
  if (error) return <p>⚠️ Terjadi kesalahan: {error}</p>;
  if (!shows.length) return <p>❌ Tidak ada data performing member.</p>;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Performing Member Theater JKT48</h2>
      <table
        style={{
          width: "100%",
          marginTop: "1rem",
          borderCollapse: "collapse",
          border: "1px solid #ccc",
        }}
      >
        <thead style={{ background: "#f2f2f2" }}>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tanggal Show</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Setlist</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Performing Member</th>
          </tr>
        </thead>
        <tbody>
          {shows.map((show) => (
            <tr key={show.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{show.showDate}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{show.setlist}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>
                {show.members && show.members.length > 0 ? (
                  <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
                    {show.members.map((m, i) => (
                      <li key={i}>{m}</li>
                    ))}
                  </ul>
                ) : (
                  <em>Belum ada data member</em>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
