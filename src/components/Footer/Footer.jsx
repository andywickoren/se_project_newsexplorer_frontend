import "./Footer.css";
import githubIcon from "../../assets/github-icon.png";
import facebookIcon from "../../assets/facebook6-icon.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 685);
    };
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  return (
    <footer className="footer">
      {!isSmallScreen ? (
        <div className="footer__full-size">
          <div className="footer__fullsize-copyright">
            © 2024 Supersite, Powered by News API
          </div>
          <div className="footer__fullsize-options">
            <Link to="/" className="footer__link">
              <button className="footer__fullsize-options-home">Home</button>
            </Link>
            <div className="footer__fullsize-options-tripleten">
              <a
                className="footer__fullsize-options-tripleten-anchor"
                href="https://www.tripleten.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="footer__fullsize-options-tripleten-icon">
                  TripleTen
                </p>
              </a>
            </div>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__fullsize-options-github-icon"
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
                className="footer__fullsize-options-facebook-icon"
                src={facebookIcon}
                alt="Facebook"
              ></img>
            </a>
          </div>
        </div>
      ) : (
        <div className="footer__mobile">
          <div className="footer__mobile-options">
            <Link to="/" className="footer__link">
              <button className="footer__mobile-options-home">Home</button>
            </Link>
            <div className="footer__mobile-icons">
              <a
                href="https://www.github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="footer__mobile-options-github-icon"
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
                  className="footer__mobile-options-facebook-icon"
                  src={facebookIcon}
                  alt="Facebook"
                ></img>
              </a>
            </div>
          </div>
          <div className="footer__mobile-tripleten">
            <a
              className="footer__mobile-tripleten-anchor"
              href="https://www.tripleten.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="footer__mobile-options-tripleten-icon">TripleTen</p>
            </a>
          </div>
          <div className="footer__mobile-copyright">
            © 2024 Supersite, Powered by News API
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;
