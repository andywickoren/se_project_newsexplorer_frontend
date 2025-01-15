import { Link } from "react-router-dom";
import userRectangle from "../../assets/user-rectangle.png";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function NavbarMain() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="navbar__logged-in-options">
      <Link to="/saved-news">
        <button className="navbar__saved-articles-button">
          Saved Articles
        </button>
      </Link>
      <button className="navbar__user-button">
        <img src={userRectangle} alt="" className="navbar__user-rectangle" />
        <p className="navbar__user-button-username">
          {currentUser.name || "User"}
        </p>
      </button>
    </div>
  );
}

export default NavbarMain;
