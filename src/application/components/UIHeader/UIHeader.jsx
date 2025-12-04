import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import UIText from "../UIText/UIText";
import logoNexus from "../../../assets/Logo/logo-cathleenexus.png";
import "./UIHeader.scss";

const UIHeader = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="ui-header">
      <div className="ui-header__left">
        <img
          src={logoNexus}
          alt="Cathleenexus Logo"
          className="ui-header__logo"
          onClick={() => navigate("/")}
        />

        {/* Hamburger button (mobile only) */}
        <button
          className="ui-header__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Dropdown menu under logo */}
        {menuOpen && (
          <div className="ui-header__dropdown">
            <div className="ui-header__arrow" />
            <div className="ui-header__dropdown-content">
              <UIText onClick={() => { navigate("/"); setMenuOpen(false); }}>
                Home
              </UIText>
              <UIText onClick={() => { navigate("/biodata"); setMenuOpen(false); }}>
                Biodata
              </UIText>
              <UIText onClick={() => { navigate("/teaterActivity"); setMenuOpen(false); }}>
               Activity
              </UIText>
              <UIText onClick={() => { navigate("/contact"); setMenuOpen(false); }}>
                Contact
              </UIText>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="ui-header__nav">

         <UIText className="ui-header__link" onClick={() => navigate("/")}>
         Home
        </UIText>

        <UIText className="ui-header__link" onClick={() => navigate("/biodata")}>
          Biodata
        </UIText>

        <UIText
          className="ui-header__link"
          onClick={() => navigate("/teaterActivity")}
        >
         Activity
        </UIText>
        <UIText className="ui-header__link" onClick={() => navigate("/contact")}>
          Nexus Project
        </UIText>
      </nav>

      <div className="ui-header__right">
        <UIText className="ui-header__hashtag">#Charmoria</UIText>
      </div>
    </header>
  );
};

export default UIHeader;
