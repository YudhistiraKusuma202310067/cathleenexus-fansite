import UIText from "../UIText/UIText";
import "./UIHeader.scss";

const UIHeader = () => {
  return (
    <header className="ui-header">
      <div className="ui-header__left">
        <img
          src="/logo.png"
          alt="Cathleenexus Logo"
          className="ui-header__logo"
        />
        <UIText className="ui-header__title">Cathleenexus</UIText>
      </div>

      <div className="ui-header__right">
        <UIText className="ui-header__hashtag">#Charmoria</UIText>
      </div>
    </header>
  );
};

export default UIHeader;
