import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NavbarMain({ logout }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="navbar__logged-in-options">
      <Link
        to="/saved-news"
        className="navbar__link navbar__link_type_saved-articles-button"
      >
        Saved Articles
      </Link>
      <button className="navbar__button navbar__button_type_logout">
        <p className="navbar__user-button-logout-text" onClick={logout}>
          Sign out
        </p>
      </button>
    </div>
  );
}
export default NavbarMain;
