import { useState, useEffect } from "react";
import "./MainPage.scss";
import UIFooter from "../../components/UIFooter/UIFooter";
import UIHeader from "../../components/UIHeader/UIHeader";
import UIReveal from "../../components/helper/UIReveal";

const photos = [
  "https://i.pinimg.com/1200x/27/4e/7d/274e7d7eaf934eb0e08530eba8a81012.jpg",
  "https://i.pinimg.com/1200x/d9/d3/49/d9d349e43cf895a32ededb7dcc8e4b12.jpg",
  "https://i.pinimg.com/736x/cb/39/80/cb398033dffb9b5db6a0436d2e7b553d.jpg",
];

const Main = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <UIHeader />

      {/* 🌸 HERO SECTION */}
      <section className="main-hero">
        <UIReveal animation="fade-up">
          <div className="hero-text">
            <h1>Cathleen Nixie</h1>
            <p>Tringgg... Si peri cantik jelita, itulah aku! ✨</p>
            <button className="hero-btn">Explore #Charmoria</button>
          </div>
        </UIReveal>

        <UIReveal animation="fade-up">
          <div className="hero-carousel">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Cathy ${index + 1}`}
                className={`carousel-img ${index === current ? "active" : ""}`}
              />
            ))}
          </div>
        </UIReveal>
      </section>

      {/* 💜 ABOUT SECTION */}
      <UIReveal animation="fade-left">
        <section className="about-section">
          <h2>Tentang Cathy</h2>
          <p>
            Cathleen Nixie, anggota JKT48 generasi 12 yang penuh pesona dan
            semangat! ✨ Dikenal dengan pesonanya yang lembut dan ceria, Cathy
            berhasil mencuri hati para Charmoria sejak debutnya. Fansite ini
            dibuat untuk mendukung perjalanan Cathy di dunia idol, dari panggung
            teater hingga berbagai aktivitas lainnya.
          </p>
        </section>
      </UIReveal>

      {/* 🌷 MILESTONE SECTION */}
      <UIReveal animation="fade-right">
        <section className="milestone-section">
          <h2>Milestone Cathy</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2023</span> — Debut bersama Generasi 12
            </div>
            <div className="timeline-item">
              <span className="year">2023</span> — Shonichi “Aitakatta”
            </div>
            <div className="timeline-item">
              <span className="year">2024</span> — Masuk Team J
            </div>
            <div className="timeline-item">
              <span className="year">2024</span> — Partisipasi di Zenza Girls
            </div>
          </div>
        </section>
      </UIReveal>

      {/* 🌼 CTA SECTION */}
      <UIReveal animation="fade-up">
        <section className="cta-section">
          <h3>Yuk, dukung terus Cathy di setiap langkahnya! 💖</h3>
          <button className="cta-btn">Gabung di Cathleenexus</button>
        </section>
      </UIReveal>

      <UIFooter />
    </>
  );
};

export default Main;
