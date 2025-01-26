import userRectangleSavedNews from "../../assets/user-rectangle-saved-news.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import union from "../../assets/union.svg";

function NavbarSavedNews() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
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
            {currentUser.name || "User"}
            <img
              src={union}
              alt=""
              className="navbar__user-button-union_saved-news"
            />
          </div>
        </button>
      </Link>
    </div>
  );
}

export default NavbarSavedNews;
