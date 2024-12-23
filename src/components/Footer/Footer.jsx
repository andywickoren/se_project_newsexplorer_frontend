import "./Footer.css";
import githubIcon from "../../assets/github-icon.png";
import facebookIcon from "../../assets/facebook6-icon.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        © 2024 Supersite, Powered by News API
      </div>
      <div className="footer__options">
        <button className="footer__options-home">Home</button>
        <div className="footer__options-TripleTen">TripleTen</div>
        <a href="www.github.com" target="_blank" rel="noopener noreferrer">
          <img className="footer__options-github-icon" src={githubIcon}></img>
        </a>
        <a href="www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            className="footer__options-facebook-icon"
            src={facebookIcon}
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
