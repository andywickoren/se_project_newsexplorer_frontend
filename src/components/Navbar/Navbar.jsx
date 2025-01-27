import "./Navbar.css";
import { Link } from "react-router-dom";
import mainSignin from "../../assets/user-rectangle.svg";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useLayout } from "../../contexts/LayoutContext";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import NavbarMain from "../NavbarMain/NavbarMain";
import NavbarSavedNews from "../NavbarSavedNews/NavbarSavedNews";

function Navbar({ handleSigninClick, isLoggedIn, logout }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const layout = useLayout();
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    console.log("useEffect - isLoggedIn:", isLoggedIn);
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 735);
    };
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <nav className="navbar">
      <div
        className={`navbar__content ${
          layout === "SavedNews" ? "navbar__content_saved-news" : ""
        }`}
      >
        <Link to="/" className="navbar__link">
          <div
            className={`navbar__news-explorer-button ${
              layout === "SavedNews"
                ? "navbar__news-explorer-button_saved-news"
                : ""
            }`}
          >
            NewsExplorer
          </div>
        </Link>

        {isSmallScreen ? (
          <NavbarMobile
            handleSigninClick={handleSigninClick}
            isLoggedIn={isLoggedIn}
            logout={logout}
          ></NavbarMobile>
        ) : (
          <div className="navbar__options">
            <Link to="/" className="navbar__link">
              <button
                className={`navbar__home-button ${
                  layout === "SavedNews" ? "navbar__home-button_saved-news" : ""
                }`}
              >
                Home
              </button>
            </Link>
            {isLoggedIn ? (
              layout !== "SavedNews" ? (
                <NavbarMain
                  isLoggedIn={isLoggedIn}
                  logout={logout}
                ></NavbarMain>
              ) : (
                <NavbarSavedNews isLoggedIn={isLoggedIn}></NavbarSavedNews>
              )
            ) : (
              <button
                className="navbar__signin-button"
                onClick={handleSigninClick}
              >
                <img
                  src={mainSignin}
                  alt="sign in button"
                  className="navbar__signin-image"
                />
                <p className="navbar__signin-button-text">Sign in</p>
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
