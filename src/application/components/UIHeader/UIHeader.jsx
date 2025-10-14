import { useNavigate } from "react-router-dom";
import UIText from "../UIText/UIText";
import logoNexus from "../../../assets/Logo/logo-cathleenexus.png";
import "./UIHeader.scss";

const UIHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="ui-header">
      <div className="ui-header__left" onClick={() => navigate("/")}>
        <img
          src={logoNexus}
          alt="Nexus Logo"
          className="ui-header__logo"
          style={{ cursor: "pointer" }}
        />
      </div>

      <nav className="ui-header__nav">
        <UIText
          className="ui-header__link"
          onClick={() => navigate("/biodata")}
        >
          BioData
        </UIText>

        <UIText
          className="ui-header__link"
          onClick={() => navigate("/teaterActivity")}
        >
         Teater Activity
        </UIText>

        <UIText
          className="ui-header__link"
          onClick={() => navigate("/contact")}
        >
          Contact
        </UIText>
      </nav>

      <div className="ui-header__right">
        <UIText className="ui-header__hashtag">#Charmoria</UIText>
      </div>
    </header>
  );
};

export default UIHeader;
