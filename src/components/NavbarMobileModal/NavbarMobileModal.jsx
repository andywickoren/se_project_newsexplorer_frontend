import "./NavbarMobileModal.css";
import close from "../../assets/close.svg";
import { Link } from "react-router-dom";
import { useLayout } from "../../contexts/LayoutContext";

function NavbarMobileModal({
  isLoggedIn,
  handleSigninClick,
  setActiveModal,
  logout,
}) {
  const layout = useLayout();
  console.log("Rendering NavbarMobileModal");

  function closeActiveModal() {
    setActiveModal("");
  }

  const handleOverlay = (e) => {
    e.target === e.currentTarget && closeActiveModal();
  };

  function handleMobileSignout() {
    closeActiveModal();
    logout();
  }

  function handleMobileSignin() {
    closeActiveModal();
    handleSigninClick();
  }
  return (
    <div className="navbar-mobile-modal" onClick={handleOverlay}>
      <div className="navbar-mobile-modal__content">
        <div className="navbar-mobile-modal__border">
          <div className="navbar-mobile-modal__header">
            <p className="navbar-mobile-modal_title">NewsExplorer</p>
            <img
              src={close}
              alt="close button"
              className="navbar-mobile-modal__close"
              onClick={closeActiveModal}
            />
          </div>
        </div>
        <div className="navbar-mobile-modal__buttons">
          {isLoggedIn ? (
            <>
              {layout === "SavedNews" ? (
                <>
                  <Link to="/" className="navbar-mobile-modal__link">
                    <p
                      className="navbar-mobile-modal__home"
                      onClick={closeActiveModal}
                    >
                      Home
                    </p>
                  </Link>
                  <button
                    className="navbar-mobile-modal__signout"
                    onClick={handleMobileSignout}
                  >
                    <p className="navbar-mobile-modal__signout-text">
                      Sign out
                    </p>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/saved-news" className="navbar-mobile-modal__link">
                    <p
                      className="navbar-mobile-modal__saved-articles navbar-mobile-modal__saved-articles_logged-in"
                      onClick={closeActiveModal}
                    >
                      Saved Articles
                    </p>
                  </Link>
                  <button
                    className="navbar-mobile-modal__signout"
                    onClick={handleMobileSignout}
                  >
                    <p className="navbar-mobile-modal__signout-text">
                      Sign out
                    </p>
                  </button>
                </>
              )}
            </>
          ) : (
            <>
              <p
                className="navbar-mobile-modal__home"
                onClick={closeActiveModal}
              >
                Home
              </p>
              <button
                className="navbar-mobile-modal__signin"
                onClick={handleMobileSignin}
              >
                <p className="navbar-mobile-modal__signin-text">Sign in</p>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarMobileModal;
