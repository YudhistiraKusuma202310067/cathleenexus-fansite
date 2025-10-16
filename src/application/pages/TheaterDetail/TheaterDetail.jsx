import { useEffect, useState } from "react";
import UIHeader from "../../components/UIHeader/UIHeader";
import UIFooter from "../../components/UIFooter/UIFooter";
import UIReveal from "../../components/helper/UIReveal";
import "./TheaterDetail.scss";

const TheaterDetail = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTheater = async () => {
      try {
        const res = await fetch("https://cathleenexus-fansite.vercel.app/api/theater");
        const result = await res.json();

        if (Array.isArray(result) && result.length > 0) {
          // ambil show pertama
          setData(result[0]);
        } else {
          throw new Error("Tidak ada data theater tersedia");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTheater();
  }, []);

  if (loading) {
    return (
      <div className="theater-loading">
        <p>✨ Memuat data performing members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="theater-error">
        <p>⚠️ Terjadi kesalahan: {error}</p>
      </div>
    );
  }

  return (
    <>
      <UIHeader />

      <main className="theater-detail">
        <UIReveal animation="fade-up">
          <h1 className="theater-title">Performing Members</h1>
          <p className="theater-date">{data.setlist} — {data.showDate}</p>
        </UIReveal>

        <UIReveal animation="fade-up">
          <div className="member-grid">
            {data.members.map((name, index) => (
              <div key={index} className="member-card">
                <span>{name}</span>
              </div>
            ))}
          </div>
        </UIReveal>
      </main>

      <UIFooter />
    </>
  );
};

export default TheaterDetail;
