import { useState, useEffect } from "react";
import "./MainPage.scss";
import UIFooter from "../../components/UIFooter/UIFooter";
import UIHeader from "../../components/UIHeader/UIHeader";

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

      {/* 🌸 HERO SECTION WITH BACKGROUND CAROUSEL */}
      <section className="main-hero">
        {/* Background Carousel */}
        <div className="hero-bg">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`bg-${index}`}
              className={`bg-img ${index === current ? "active" : ""}`}
              loading="eager"
            />
          ))}
        </div>

        {/* Text Overlay */}
        <div className="hero-text">
          <h1>Cathleen Nixie</h1>
          <p>Tringgg... Si peri cantik jelita, itulah aku! ✨</p>
        </div>
      </section>

      {/* 💜 ABOUT SECTION */}
      <section className="about-section">
        <h2>Tentang Cathy</h2>
        <p>
          Cathleen Hana Nixie — yang akrab dipanggil Cathy — adalah salah satu wajah muda yang mulai mencuri perhatian di dunia idol Indonesia melalui JKT48. Cathy lahir pada 28 Mei 2009 di Surabaya dan diperkenalkan sebagai bagian dari generasi JKT48 pada periode rekrutmen generasi kesebelas. Sejak debutnya, Cathy dikenal memiliki aura lembut namun ceria, yang membuatnya cepat mendapatkan penggemar dari berbagai kalangan.

          <br /><br />

          Latar belakang Cathy menunjukkan bahwa ia telah terpapar dunia hiburan sejak usia muda. Beberapa sumber menyebutkan bahwa ia mulai aktif mengikuti kegiatan seni dan konten digital di platform seperti TikTok sebelum bergabung dengan JKT48. Cathy juga sempat menempuh pendidikan non-konvensional (homeschool), yang mempengaruhi fleksibilitas waktunya dalam menjalani jadwal latihan dan aktivitas panggung.

          <br /><br />

          Sejak aktif di JKT48, Cathy rutin tampil dalam berbagai kegiatan grup, mulai dari latihan teater, pertunjukan panggung, hingga konten media sosial resmi. Dalam biodata penggemar, ia dikenal memiliki tinggi sekitar 158 cm, golongan darah A, serta kepribadian yang ramah dan mudah berinteraksi. Jikoshoukai khasnya pun sempat viral di komunitas, yaitu: “Tring! Si peri cantik jelita, itulah aku.” — sebuah tagline yang memperkuat citra imut dan “fairy” yang melekat padanya.

          <br /><br />

          Dalam perjalanan kariernya, Cathy resmi dipromosikan dari status trainee (kenkyuusei) menjadi anggota inti JKT48 pada 1 November 2024. Promosi ini menjadi langkah besar yang menandai kepercayaan manajemen terhadap kemampuan serta potensi panggungnya, sekaligus membuka kesempatan tampil yang lebih luas di berbagai proyek resmi.

          <br /><br />

          Komunitas penggemar Cathy juga terus berkembang. Fanbase yang dikenal dengan nama Cathleennexus aktif memberikan dukungan melalui berbagai platform seperti Instagram, fansite, serta kegiatan daring maupun luring. Cathy sendiri aktif membagikan aktivitasnya melalui akun Instagram resmi @jkt48.cathy dan akun X (Twitter), yang menjadi sarana komunikasi antara dirinya dan para penggemar.

          <br /><br />

          Di mata publik, Cathy dikenal sebagai sosok yang ceria, ramah, dan gemar berinteraksi melalui konten ringan seperti dance challenge dan vlog singkat. Meskipun usianya masih sangat muda, ia menunjukkan profesionalisme serta semangat belajar yang tinggi, membuat para penggemarnya optimis terhadap masa depannya di dunia hiburan.
        </p>

      </section>

      {/* 🌷 MILESTONE SECTION */}
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

      {/* 🌼 CTA SECTION */}
      <section className="cta-section">
        <h3>Yuk, dukung terus Cathy di setiap langkahnya! 💖</h3>
        <button className="cta-btn">Gabung di Cathleenexus</button>
      </section>

      <UIFooter />
    </>
  );
};

export default Main;
