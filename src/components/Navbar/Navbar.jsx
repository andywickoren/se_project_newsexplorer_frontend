import "./Navbar.css";
import { Link } from "react-router-dom";
import mainSignin from "../../assets/user-rectangle.svg";
import { useEffect, useState } from "react";
// import { useContext } from "react";
// import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useLayout } from "../../contexts/LayoutContext";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import NavbarMain from "../NavbarMain/NavbarMain";
import NavbarSavedNews from "../NavbarSavedNews/NavbarSavedNews";

function Navbar({ handleSigninClick, isLoggedIn, logout }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const layout = useLayout();
  const navbar = document.querySelector(".navbar");

  // if (layout === "SavedNews") {
  //   navbar.querySelector("");
  // }
  // console.log(layout);

  // const { currentUser } = useContext(CurrentUserContext);

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
      <div className="navbar__content">
        <Link
          to="/"
          className={`navbar__link navbar__news-explorer-button ${
            // navbar__link_type_news-explorer-button
            // navbar__link_type_button
            // className="navbar__link navbar__button navbar__user-button navbar__button_type_user-button_theme_dark "
            layout === "SavedNews"
              ? "navbar__news-explorer-button_saved-news"
              : ""
          }`}
        >
          NewsExplorer
          {/* <div
            className={`navbar__news-explorer-button ${
              layout === "SavedNews"
                ? "navbar__news-explorer-button_saved-news"
                : ""
            }`}
          >
            NewsExplorer
          </div> */}
        </Link>

        {isSmallScreen ? (
          <NavbarMobile
            handleSigninClick={handleSigninClick}
            isLoggedIn={isLoggedIn}
            logout={logout}
          ></NavbarMobile>
        ) : (
          <div className="navbar__options">
            <Link
              to="/"
              className={`navbar__link navbar__link_type_home-button ${
                layout === "SavedNews"
                  ? "navbar__link_type_home-button_theme_dark"
                  : ""
              }`}
            >
              Home
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
                className="navbar__button navbar__button_type_signin"
                onClick={handleSigninClick}
              >
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
