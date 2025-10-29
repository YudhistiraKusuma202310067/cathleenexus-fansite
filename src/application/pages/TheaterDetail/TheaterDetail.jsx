import { useEffect, useState } from "react";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";
import "./TheaterDetail.scss";

export default function TheaterDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://cathleenexus-fansite.vercel.app/api/theater");
        const list = await res.json();

        // Hapus ID duplikat
        const uniqueList = Array.from(new Map(list.map((item) => [item.id, item])).values());

        // Fetch detail tiap ID
        const details = await Promise.all(
          uniqueList.map((item) =>
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

        // Urutkan dari yang paling dekat
        filtered.sort((a, b) => {
          const da = new Date(a.showDate);
          const db = new Date(b.showDate);
          return da - db;
        });

        // Deteksi member ulang tahun
        const processed = filtered.map((show) => {
          const nameCount = {};
          show.members.forEach((m) => {
            nameCount[m] = (nameCount[m] || 0) + 1;
          });

          const birthdayMembers = Object.keys(nameCount).filter(
            (m) => nameCount[m] > 1
          );

          // Hapus duplikat dari daftar tampil
          const uniqueMembers = show.members.filter(
            (m, index, self) => self.indexOf(m) === index
          );

          return { ...show, members: uniqueMembers, birthdayMembers };
        });

        setData(processed);
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
          <table className="theater-table">
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
                    <div className="member-list">
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
                    </div>

                    {/* 🎂 Birthday Section */}
                    {show.birthdayMembers.length > 0 && (
                      <div className="birthday-section mt-2">
                        {show.birthdayMembers.map((bm, i) => (
                          <span key={i} className="member-tag birthday">
                            {bm} 🎂
                          </span>
                        ))}
                      </div>
                    )}
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
