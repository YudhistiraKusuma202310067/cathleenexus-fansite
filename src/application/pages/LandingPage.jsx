import { useState, useEffect } from "react";
import "./LandingPage.scss";
import UIHeader from "../components/UIHeader/UIHeader";
import UIText from "../components/UIText/UIText";
import UIScreenContainer from "../components/UIScreenContainer/UIScreenContainer";

const photos = [
  "/cathy1.jpg",
  "/cathy2.jpg",
  "/cathy3.jpg",
];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  // auto-slide carousel setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <UIScreenContainer>
      <UIHeader />
      <div className="landing">
        {/* Carousel */}
        <div className="carousel">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Cathy ${index + 1}`}
              className={`carousel-img ${index === current ? "active" : ""}`}
            />
          ))}
        </div>

        {/* Teks pertanyaan */}
        <UIText className="landing-question">
          Kenal nggak sih sama member di atas?
        </UIText>

        {/* Tombol aksi */}
        <div className="landing-buttons">
          <button className="btn-yes">Kenal banget dong</button>
          <button className="btn-no">Belum kenal nih</button>
        </div>
      </div>
    </UIScreenContainer>
  );
};

export default LandingPage;
