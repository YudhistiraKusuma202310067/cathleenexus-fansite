import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cathleenPic1 from "../../../assets/BioData/cathleenPic1.jpeg";
import cathleenPic2 from "../../../assets/BioData/cathleenPic2.jpeg";
import cathleenPic3 from "../../../assets/BioData/cathleenPic3.jpeg";
import cathleenPic4 from "../../../assets/BioData/cathleenPic4.jpeg";
import cathleenPic5 from "../../../assets/BioData/cathleenPic5.jpeg";
import cathleenPic6 from "../../../assets/BioData/cathleenPic6.jpeg";
import cathleenPic7 from "../../../assets/BioData/cathleenPic7.jpeg";
import cathleenPic8 from "../../../assets/BioData/cathleenPic8.jpeg";
import cathleenPic9 from "../../../assets/BioData/cathleenPic9.jpeg";

import "./BioData.scss";
import UIHeader from "../../components/UIHeader/UIHeader";
import UIText from "../../components/UIText/UIText";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";


const BioData = () => {
  const [bioData, setBioData] = useState({});
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [cathleenPic1, cathleenPic2, cathleenPic3, cathleenPic4, cathleenPic5,cathleenPic6,cathleenPic7,cathleenPic8,cathleenPic9];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);
}, [])     


  useEffect(() => {
    const data = {
      nama: "Cathleen Nixie",
      namaPanggilan: "Cathoy",
      asal: "Surabaya",
      jiko: "Tringgg... Si peri cantik jelita, itulah aku! Hai namaku Cathy",
      tanggalLahir: "28 Mei 2009",
      golonganDarah: "A",
      horoskop: "Gemini",
      tinggiBadan: "158 cm",
      generasi: "11",
    };
    setBioData(data);
  }, []);


  return (
    <UIScreenContainer>
      <UIHeader />
      <div className="bio-data-page">
        <div className="bio-data-page__content">
          {/* Left Section - Welcome */}
          <div className="bio-data-page__left">
            <div className="bio-data-page__welcome">
              <UIText text="Welcome to" variant="welcome-main" />
              <UIText text="Cathleenexus" variant="welcome-highlight" />
              <UIText text="#Charmoria" variant="welcome-sub" />
            </div>

            {/* Profile Image Placeholder */}
            <div className="bio-data-page__image-container">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Cathleen Nixie ${index + 1}`}
                className={`bio-data-page__image ${index === currentImage ? "active" : ""}`}
              />
            ))}
          </div>
          </div>

          {/* Right Section - Biodata */}
          <div className="bio-data-page__right">
            <div className="bio-data-page__card">
              <div className="bio-data-page__card-header">
                <UIText text="Cathleen's" variant="card-title" />
                <UIText text="Biodata" variant="card-subtitle" />
              </div>

              <div className="bio-data-page__info-list">
                <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">👤</span>
                  <UIText text={bioData.nama} variant="info-text" />
                </div>

                <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">✨</span>
                  <UIText text={bioData.namaPanggilan} variant="info-text" />
                </div>

                <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">🎂</span>
                  <UIText text={bioData.tanggalLahir} variant="info-text" />
                </div>

                  <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">🧬</span>
                  <UIText text={bioData.generasi} variant="info-text" />
                </div>

                <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">📍</span>
                  <UIText text={bioData.asal} variant="info-text" />
                </div>

                <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">🩸</span>
                  <UIText text={bioData.golonganDarah} variant="info-text" />
                </div>

                <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">📏</span>
                  <UIText text={bioData.tinggiBadan} variant="info-text" />
                </div>

                <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">⭐</span>
                  <UIText text={bioData.horoskop} variant="info-text" />
                </div>

                <div className="bio-data-page__info-item">
                  <span className="bio-data-page__icon">💬</span>
                  <UIText text="GAIS" variant="info-text" />
                </div>
              </div>

              {/* Quote Section */}
              <div className="bio-data-page__quote">
                <UIText text={`"${bioData.jiko}"`} variant="quote-text" />
              </div>

              {/* Back Button */}
              <div className="bio-data-page__button-container">
                <button className="bio-data-page__btn-back" onClick={() => navigate("/")}>
                  ← Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UIScreenContainer>
  );
};

export default BioData;