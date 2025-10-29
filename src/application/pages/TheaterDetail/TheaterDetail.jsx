import { useEffect, useState } from "react";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";
import "./TheaterDetail.scss"; // ← Make sure to import your CSS file

export default function TheaterDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://cathleenexus-fansite.vercel.app/api/theater");
        const list = await res.json();

        const details = await Promise.all(
          list.map((item) =>
            fetch(`https://cathleenexus-fansite.vercel.app/api/theater/${item.id}`)
              .then((r) => r.json())
              .catch(() => null)
          )
        );

        const today = new Date();
        const filtered = details.filter((d) => {
          if (!d || !d.members) return false;

          const hasCathleen = d.members.some((m) =>
            m.toLowerCase().includes("cathleen nixie")
          );

          const dateMatch = d.showDate.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
          if (!dateMatch) return false;

          const [_, day, month, year] = dateMatch;
          const showDate = new Date(`${year}-${month}-${day}T00:00:00`);

          return hasCathleen && showDate >= today;
        });

        filtered.sort((a, b) => {
          const da = new Date(a.showDate);
          const db = new Date(b.showDate);
          return da - db;
        });

        setData(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <UIScreenContainer>
      <div className="theater-detail">
        <h1 className="theater-title">🎭 Theater Schedule — Cathleen Nixie</h1>

        {loading ? (
          <p className="theater-loading">Memuat jadwal teater...</p>
        ) : data.length === 0 ? (
          <p className="theater-empty">
            Belum ada jadwal teater mendatang untuk Cathleen 💭
          </p>
        ) : (
          <table className="theater-table" >
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Setlist</th>
                <th>Performing Member</th>
                <th>Tiket</th>
              </tr>
            </thead>
            <tbody>
              {data.map((show) => (
                <tr key={show.id}>
                  <td>{show.showDate}</td>
                  <td>{show.setlist}</td>
                  <td>
                    {show.members.map((m, i) => (
                      <span
                        key={i}
                        className={`member-tag ${
                          m.toLowerCase().includes("cathleen nixie")
                            ? "highlight"
                            : ""
                        }`}
                      >
                        {m}
                      </span>
                    ))}
                  </td>
                  <td>
                    <a
                      href={`https://jkt48.com/theater/schedule/id/${show.id}?lang=id`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theater-link"
                    >
                      Beli Tiket
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </UIScreenContainer>
  );
}
