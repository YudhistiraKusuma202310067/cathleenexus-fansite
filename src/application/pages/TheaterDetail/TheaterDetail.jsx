import { useEffect, useState } from "react";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";

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
      <div className="recapoffair-container">
        <h1 className="recapoffair-title">🎭 Theater Schedule — Cathleen Nixie</h1>

        {loading ? (
          <p className="text-center text-[#ff6ea1] animate-pulse">
            Memuat jadwal teater...
          </p>
        ) : data.length === 0 ? (
          <p className="recapoffair-empty">
            Belum ada jadwal teater mendatang untuk Cathleen 💭
          </p>
        ) : (
          <div className="flex flex-col gap-6 mt-6">
            {data.map((show) => (
              <div
                key={show.id}
                className="w-full bg-white border border-pink-100 shadow-md hover:shadow-lg transition rounded-2xl p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#ff6ea1] mb-1">{show.setlist}</h3>
                    <p className="text-gray-600">📅 {show.showDate}</p>
                  </div>

                  <a
                    href={`https://jkt48.com/theater/schedule/id/${show.id}?lang=id`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm color-[#433878] bg-[#ff6ea1] hover:bg-[#ff4e85] px-4 py-2 rounded-full shadow-sm transition"
                  >
                    🔗 Detail Show
                  </a>
                </div>

                <div className="mt-4 border-t border-pink-100 pt-3">
                  <p className="font-semibold text-gray-700 mb-2">Performing Members:</p>
                  <div className="flex flex-wrap gap-2 overflow-x-auto">
                    {show.members.map((m, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm ${
                          m.toLowerCase().includes("cathleen nixie")
                            ? "bg-[#ff6ea1]/20 text-[#ff6ea1] font-semibold"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </UIScreenContainer>
  );
}
