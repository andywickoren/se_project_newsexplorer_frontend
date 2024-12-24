import "./Navbar.css";
import { Link } from "react-router-dom";
import mainSignin from "../../assets/main-signin.png";
import userRectangle from "../../assets/user-rectangle.png";
import { useEffect, useState } from "react";

function Navbar({ handleSigninClick }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__news-explorer-button">NewsExplorer</div>
      <div className="navbar__options">
        <button className="navbar__home-button">Home</button>
        {!isLoggedIn ? (
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
              <p className="navbar__username">username</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Navbar;
