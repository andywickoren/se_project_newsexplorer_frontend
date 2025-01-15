import { Link } from "react-router-dom";
import { useState } from "react";
import { useLayout } from "../../contexts/LayoutContext";

function NavbarMobile(isLoggedIn) {
  const layout = useLayout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbarmobile">
      <div className="navbar__menu">
        <button
          className="navbar__menu-icon"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
        {isMenuOpen && (
          <div className="navbar__dropdown">
            <Link to="/" className="navbar__dropdown-link">
              Home
            </Link>
            {isLoggedIn ? (
              <Link to="/saved-news" className="navbar__dropdown-link">
                Saved Articles
              </Link>
            ) : (
              <button
                className="navbar__dropdown-button"
                onClick={handleSigninClick}
              >
                Sign In
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default NavbarMobile;
