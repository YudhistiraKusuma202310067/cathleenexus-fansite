import { useNavigate } from "react-router-dom";
import "./TeaterActivity.scss";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";

const TeaterActivity = () => {
  const navigate = useNavigate();

  return (
    <UIScreenContainer>
      <div className="teater-container">
        <h1 className="teater-title">Cathy JKT48 Activity</h1>

        <div className="teater-grid">
          {[
            { src: "src/assets/TeaterActivity/cathy-show.jpeg", title: "Jadwal Teater Show" },
            { src: "src/assets/TeaterActivity/cathy-videocall.jpeg", title: "Jadwal Video Call" },
            { src: "src/assets/TeaterActivity/cathy-mng.jpg", title: "Jadwal Meet and Greet" },
            { src: "src/assets/TeaterActivity/cathy-2s.jpg", title: "Jadwal 2Shot" },
            { src: "src/assets/TeaterActivity/cathy-ofc.jpeg", title: "Jadwal OFC Event" },
            { src: "src/assets/TeaterActivity/cathy-offair.jpeg", title: "Jadwal Off-Air" },
          ].map((item, i) => (
            <div key={i} className="teater-card">
              <div className="teater-image-wrapper">
                <img src={item.src} alt={item.title} className="teater-image" />
              </div>
              <h2 className="teater-subtitle">{item.title}</h2>
              <button
                className="teater-button"
                onClick={() => navigate("/detail")}
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </UIScreenContainer>
  );
};

export default TeaterActivity;
