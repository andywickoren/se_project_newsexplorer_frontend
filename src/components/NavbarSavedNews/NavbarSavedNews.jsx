import userRectangleSavedNews from "../../assets/user-rectangle-saved-news.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import union from "../../assets/union.svg";

function NavbarSavedNews() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="navbar__saved-news-options">
      <p className="navbar__saved-articles-text navbar__link_active">
        Saved Articles
      </p>
      <Link
        to="/"
        className="navbar__link navbar__button navbar__button_type_user-button"
      >
        {/* <img
    src={userRectangleSavedNews}
    alt="user button"
    className="navbar__user-rectangle_saved-news"
  /> */}
        <p className="navbar__user-button-text"></p>
        {currentUser.name || "User"}
        <img src={union} alt="user" className="navbar__user-button-union" />
      </Link>
    </div>
  );
}

export default NavbarSavedNews;
