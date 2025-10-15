import React, { useEffect, useState } from "react";

const TheaterDetail = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedShow, setSelectedShow] = useState(null);
  const [performers, setPerformers] = useState([]);
  const [error, setError] = useState(null);

  // 🔹 1. Ambil daftar show dari API /api/theater
  useEffect(() => {
    const fetchShows = async () => {
      try {
        const res = await fetch("/api/theater");
        if (!res.ok) throw new Error("Gagal mengambil data jadwal");
        const data = await res.json();
        setShows(data);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat daftar show.");
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  // 🔹 2. Ambil detail performing member dari API /api/theaterDetail?id=XXXX
  const fetchPerformers = async (id) => {
    try {
      setPerformers([]);
      setSelectedShow(id);
      const res = await fetch(`/api/theaterDetail?id=${id}`);
      if (!res.ok) throw new Error("Gagal mengambil detail member");
      const data = await res.json();
      setPerformers(data.performers);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat detail member.");
    }
  };

  if (loading)
    return <p className="text-center mt-8 text-gray-500">Memuat jadwal theater...</p>;
  if (error)
    return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">
        Jadwal Theater JKT48 💖
      </h1>

      {/* 🔸 Daftar Show */}
      <div className="space-y-3">
        {shows.map((show) => (
          <div
            key={show.id}
            className={`p-3 rounded-lg cursor-pointer border transition-all duration-200 ${
              selectedShow === show.id
                ? "bg-pink-600 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => fetchPerformers(show.id)}
          >
            {show.title}
          </div>
        ))}
      </div>

      {/* 🔸 Performing Members */}
      {selectedShow && (
        <div className="mt-8 border-t pt-4 animate-fadeIn">
          <h2 className="text-xl font-semibold mb-3 text-pink-600">
            Performing Members
          </h2>
          {performers.length === 0 ? (
            <p className="text-gray-500">Sedang memuat...</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {performers.map((member, idx) => (
                <li
                  key={idx}
                  className="p-2 bg-gray-50 border rounded text-center hover:bg-pink-600 hover:text-white transition-all"
                >
                  {member}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default TheaterDetail;
