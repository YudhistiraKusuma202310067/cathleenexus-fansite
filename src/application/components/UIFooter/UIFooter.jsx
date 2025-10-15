import "./UIFooter.scss";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const UIFooter = () => {
  return (
    <footer className="ui-footer">
      <div className="ui-footer__inner">

        <p className="ui-footer__text">
          © {new Date().getFullYear()} <strong>Cathleenexus</strong> — #Charmoria
        </p>

        <div className="ui-footer__socials">
          <a
            href="https://www.instagram.com/cathleenexus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@cathleenexus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://x.com/cathleenexus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default UIFooter;
