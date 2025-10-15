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
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";
import UIFooter from "../../components/UIFooter/UIFooter";

const BioData = () => {
  const [bioData, setBioData] = useState({});
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    cathleenPic1,
    cathleenPic2,
    cathleenPic3,
    cathleenPic4,
    cathleenPic5,
    cathleenPic6,
    cathleenPic7,
    cathleenPic8,
    cathleenPic9,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
      <div className='bio-data-page'>
        {/* HERO SECTION */}
        <div className='bio-data-page__hero'>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Cathleen Nixie ${index + 1}`}
              className={index === currentImage ? "active" : ""}
            />
          ))}
          <div className='bio-data-page__hero-overlay'></div>
          <div className='bio-data-page__hero-content'>
            <h1>Cathleen Nixie</h1>
          </div>
        </div>

        {/* BIO CARD */}
        <div className='bio-data-page__card-section'>
          <div className='bio-data-page__card'>
            <div className='bio-data-page__info-list'>
              <div className='bio-data-page__info-item'>
                <span className='bio-data-page__icon'>🎂</span>
                <span>{bioData.tanggalLahir}</span>
              </div>
              <div className='bio-data-page__info-item'>
                <span className='bio-data-page__icon'>📍</span>
                <span>{bioData.asal}</span>
              </div>
              <div className='bio-data-page__info-item'>
                <span className='bio-data-page__icon'>🩸</span>
                <span>{bioData.golonganDarah}</span>
              </div>
              <div className='bio-data-page__info-item'>
                <span className='bio-data-page__icon'>⭐</span>
                <span>{bioData.horoskop}</span>
              </div>
              <div className='bio-data-page__info-item'>
                <span className='bio-data-page__icon'>🧬</span>
                <span>Generasi {bioData.generasi}</span>
              </div>
              <div className='bio-data-page__info-item'>
                <span className='bio-data-page__icon'>📏</span>
                <span>{bioData.tinggiBadan}</span>
              </div>
            </div>

            <div className='bio-data-page__quote'>"{bioData.jiko}"</div>

            <button
              className='bio-data-page__btn-back'
              onClick={() => navigate("/")}
            >
              ← Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    </UIScreenContainer>
  );
};

export default BioData;
