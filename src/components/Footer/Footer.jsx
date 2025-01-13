import "./Footer.css";
import githubIcon from "../../assets/github-icon.png";
import facebookIcon from "../../assets/facebook6-icon.png";
import { Link } from "react-router-dom";

function Footer({ logout }) {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        © 2024 Supersite, Powered by News API
      </div>
      <div className="footer__options">
        <Link to="/" className="navbar__link">
          <button className="footer__options-home">Home</button>
        </Link>
        <div className="footer__options-TripleTen" onClick={logout}>
          TripleTen
        </div>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer__options-github-icon"
            src={githubIcon}
            alt="GitHub"
          ></img>
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer__options-facebook-icon"
            src={facebookIcon}
            alt="Facebook"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
