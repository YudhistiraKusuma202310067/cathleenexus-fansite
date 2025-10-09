import UIText from "../UIText/UIText";
import logoNexus from "../../../assets/Logo/logo-cathleenexus.png";
import "./UIHeader.scss";

const UIHeader = () => {
  return (
    <header className="ui-header">
      <div className="ui-header__left">
        <img
          src={logoNexus}
          alt="Nexus Logo"
          className="ui-header__logo"
        />
      </div>

      <div className="ui-header__right">
        <UIText className="ui-header__hashtag">#Charmoria</UIText>
      </div>
    </header>
  );
};

export default UIHeader;
