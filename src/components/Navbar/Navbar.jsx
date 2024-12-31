import "./Navbar.css";
import { Link } from "react-router-dom";
import mainSignin from "../../assets/main-signin.png";
import userRectangle from "../../assets/user-rectangle.png";
import userRectangleSavedNews from "../../assets/user-rectangle-saved-news.png";
import union from "../../assets/union.png";
import { useEffect, useState } from "react";

function Navbar({ handleSigninClick, layout, username }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="navbar">
      <div className="navbar__news-explorer-button">NewsExplorer</div>
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
        {layout === "SavedNews" ? (
          <div className="navbar__saved-news-options">
            <p className="navbar__saved-articles-text">Saved Articles</p>
            <Link to="/" className="navbar__link">
              <button className="navbar__user-button">
                <img
                  src={userRectangleSavedNews}
                  alt=""
                  className={"navbar__user-rectangle_saved-news"}
                />

                <div className="navbar__user-button-elements">
                  <p className="navbar__user-button-text_saved-news"></p>
                  {username || "User"}
                  <img
                    src={union}
                    alt=""
                    className="navbar__user-button-union_saved-news"
                  />
                </div>
              </button>
            </Link>
          </div>
        ) : !isLoggedIn ? (
          <button className="navbar__signin-button" onClick={handleSigninClick}>
            <img src={mainSignin} alt="" className="navbar__signin-image" />
            <p className="navbar__signin-button-text">Sign in</p>
          </button>
        ) : (
          <div className="navbar__logged-in-options">
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
                {username || "User"}
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
