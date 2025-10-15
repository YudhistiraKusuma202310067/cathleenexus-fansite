import { useNavigate } from "react-router-dom";
import "./TeaterActivity.scss";
import UIScreenContainer from "../../components/UIScreenContainer/UIScreenContainer";

const TeaterActivity = () => {
  const navigate = useNavigate();

  const activities = [
    { src: "src/assets/TeaterActivity/cathy-show.jpeg", title: "Jadwal Teater Show", link: "https://example.com/teater" },
    { src: "src/assets/TeaterActivity/cathy-videocall.jpeg", title: "Jadwal Video Call", link: "https://example.com/videocall" },
    { src: "src/assets/TeaterActivity/cathy-mng.jpg", title: "Jadwal Meet and Greet", link: "https://example.com/mng" },
    { src: "src/assets/TeaterActivity/cathy-2s.jpg", title: "Jadwal 2Shot", link: "https://example.com/2shot" },
    { src: "src/assets/TeaterActivity/cathy-ofc.jpeg", title: "Jadwal OFC Event", link: "https://example.com/ofc" },
    { src: "src/assets/TeaterActivity/cathy-offair.jpeg", title: "Jadwal Off-Air", link: "/recap-offair" },
  ];

  const handleClick = (link) => {
    if (link.startsWith("http")) {
      window.location.href = link; // open in same tab
    } else {
      navigate(link); // internal route
    }
  };

  return (
    <UIScreenContainer>
      <div className="teater-container">
        <h1 className="teater-title">Cathy JKT48 Activity</h1>

        <div className="teater-grid">
          {activities.map((item, i) => (
            <div key={i} className="teater-card">
              <div className="teater-image-wrapper">
                <img src={item.src} alt={item.title} className="teater-image" />
              </div>

              <h2
                className="teater-subtitle"
                onClick={() => handleClick(item.link)}
                style={{ cursor: "pointer" }}
              >
                {item.title}
              </h2>

              <button
                className="teater-button"
                onClick={() => handleClick(item.link)}
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
