import "./Navbar.css";
import { Link } from "react-router-dom";
import mainSignin from "../../assets/main-signin.png";
import userRectangle from "../../assets/user-rectangle.png";
import userRectangleSavedNews from "../../assets/user-rectangle-saved-news.png";
import union from "../../assets/union.png";
import { useEffect, useState } from "react";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useLayout } from "../../contexts/LayoutContext";
import menuIconHome from "../../assets/menu-icon-home.png";
import NavbarMobile from "../NavbarMobile/NavbarMobile";
import NavbarMain from "../NavbarMain/NavbarMain";
import NavbarSavedNews from "../NavbarSavedNews/NavbarSavedNews";

function Navbar({ handleSigninClick, isLoggedIn }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const layout = useLayout();
  console.log("NAVBAR isLoggedIn: ", isLoggedIn);
  console.log("Navbar Layout: =============>>", layout);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    console.log("useEffect - isLoggedIn:", isLoggedIn);
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 685);
    };
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize(); // Initial check
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="navbar">
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
        <NavbarMobile isLoggedIn={isLoggedIn}></NavbarMobile>
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
              <NavbarMain isLoggedIn={isLoggedIn}></NavbarMain>
            ) : (
              <NavbarSavedNews isLoggedIn={isLoggedIn}></NavbarSavedNews>
            )
          ) : (
            <button
              className="navbar__signin-button"
              onClick={handleSigninClick}
            >
              <img src={mainSignin} alt="" className="navbar__signin-image" />
              <p className="navbar__signin-button-text">Sign in</p>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

{
  /* <div className="navbar__logged-in-options">
                <Link to="/saved-news">
                  <button className="navbar__saved-articles-button">
                    Saved Articles
                  </button>
                </Link>
                <button className="navbar__user-button">
                  <img
                    src={userRectangle}
                    alt=""
                    className="navbar__user-rectangle"
                  />
                  <p className="navbar__user-button-username">
                    {currentUser.name || "User"}
                  </p>
                </button>
              </div> */
}

// return (
//   <div className="navbar">
//     <Link to="/" className="navbar__link">
//       <div
//         className={`navbar__news-explorer-button ${
//           layout === "SavedNews"
//             ? "navbar__news-explorer-button_saved-news"
//             : ""
//         }`}
//       >
//         NewsExplorer
//       </div>
//     </Link>
//     <div className="navbar__options">
//       <Link to="/" className="navbar__link">
//         <button
//           className={`navbar__home-button ${
//             layout === "SavedNews" ? "navbar__home-button_saved-news" : ""
//           }`}
//         >
//           Home
//         </button>
//       </Link>
//       {layout === "SavedNews" ? (
// <div className="navbar__saved-news-options">
//   <p className="navbar__saved-articles-text">Saved Articles</p>
//   <Link to="/" className="navbar__link">
//     <button className="navbar__user-button">
//       <img
//         src={userRectangleSavedNews}
//         alt=""
//         className={"navbar__user-rectangle_saved-news"}
//       />

//       <div className="navbar__user-button-elements">
//         <p className="navbar__user-button-text_saved-news"></p>
//         {currentUser.name || "User"}
//         <img
//           src={union}
//           alt=""
//           className="navbar__user-button-union_saved-news"
//         />
//       </div>
//     </button>
//   </Link>
// </div>
//       ) : !isLoggedIn ? (
//   <button className="navbar__signin-button" onClick={handleSigninClick}>
//     <img src={mainSignin} alt="" className="navbar__signin-image" />
//     <p className="navbar__signin-button-text">Sign in</p>
//   </button>
// ) : (
// <div className="navbar__logged-in-options">
//   <Link to="/saved-news">
//     <button className="navbar__saved-articles-button">
//       Saved Articles
//     </button>
//   </Link>
//   <button className="navbar__user-button">
//     <img
//       src={userRectangle}
//       alt=""
//       className="navbar__user-rectangle"
//     />
//     <p className="navbar__user-button-username">
//       {currentUser.name || "User"}
//     </p>
//   </button>
// </div>
// )}
//     </div>
//   </div>
// );

export default Navbar;
