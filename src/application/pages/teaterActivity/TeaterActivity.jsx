import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TeaterActivity.scss";
import UIHeader from "../../components/UIHeader/UIHeader";
import UIText from "../../components/UIText/UIText";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";

const TeaterActivity = () => {
  return (
       <UIScreenContainer>
      <UIHeader />
    <div className="teater-container">
      <h1 className="teater-title">Cathy JKT48 Activity</h1>

      <div className="teater-grid">
        <div className="teater-card">
          <img
            src="src\assets\TeaterActivity\cathy-show.jpeg" 
            alt="Jadwal Teater Show"
            className="teater-image"
          />
          <h2 className="teater-subtitle">Jadwal Teater Show</h2>
          <button className="teater-button">Klik di sini</button>
        </div>

        <div className="teater-card">
          <img
            src="src\assets\TeaterActivity\cathy-videocall.jpeg"
            alt="Jadwal Video Call"
            className="teater-image"
          />
          <h2 className="teater-subtitle">Jadwal Video Call</h2>
          <button className="teater-button">Klik di sini</button>
        </div>

        <div className="teater-card">
          <img
            src="src\assets\TeaterActivity\cathy-mng.jpg"
            alt="Jadwal Meet and Greet"
            className="teater-image"
          />
          <h2 className="teater-subtitle">Jadwal Meet and Greet</h2>
          <button className="teater-button">Klik di sini</button>
        </div>

        <div className="teater-card">
          <img
            src="src\assets\TeaterActivity\cathy-2s.jpg"
            alt="Jadwal 2Shot"
            className="teater-image"
          />
          <h2 className="teater-subtitle">Jadwal 2Shot</h2>
          <button className="teater-button">Klik di sini</button>
        </div>

        <div className="teater-card">
          <img
            src="src\assets\TeaterActivity\cathy-ofc.jpeg"
            alt="Jadwal OFC Event"
            className="teater-image"
          />
          <h2 className="teater-subtitle">Jadwal OFC Event</h2>
          <button className="teater-button">Klik di sini</button>
        </div>

        <div className="teater-card">
          <img
            src="src\assets\TeaterActivity\cathy-offair.jpeg"
            alt="Jadwal Off-Air"
            className="teater-image"
          />
          <h2 className="teater-subtitle">Jadwal Off-Air</h2>
          <button className="teater-button">Klik di sini</button>
        </div>
      </div>
    </div>
    </UIScreenContainer>
  );
};

export default TeaterActivity;
