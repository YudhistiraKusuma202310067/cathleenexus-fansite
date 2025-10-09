import { useState, useEffect } from "react";
import "./LandingPage.scss";
import UIHeader from "../components/UIHeader/UIHeader";
import UIText from "../components/UIText/UIText";
import UIScreenContainer from "../components/UIScreenContainer/UIScreenContainer";

const photos = [
  "https://i.pinimg.com/1200x/27/4e/7d/274e7d7eaf934eb0e08530eba8a81012.jpg",
  "https://i.pinimg.com/1200x/d9/d3/49/d9d349e43cf895a32ededb7dcc8e4b12.jpg",
  "https://i.pinimg.com/736x/cb/39/80/cb398033dffb9b5db6a0436d2e7b553d.jpg",
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
