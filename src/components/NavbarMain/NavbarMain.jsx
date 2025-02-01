import { Link } from "react-router-dom";
import userRectangle from "../../assets/user-rectangle.svg";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NavbarMain({ logout }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="navbar__logged-in-options">
      <Link
        to="/saved-news"
        className="navbar__link navbar__saved-articles-button"
      >
        Saved Articles
      </Link>
      <button className="navbar__button navbar__button_type_user-button">
        <p className="navbar__user-button-logout" onClick={logout}>
          Sign out
        </p>
      </button>
    </div>
  );
}
export default NavbarMain;
