import "./NavbarMobileModal.css";
import close from "../../assets/mobile-close.png";
import { Link } from "react-router-dom";

function NavbarMobileModal({
  isLoggedIn,
  handleSigninClick,
  setActiveModal,
  logout,
}) {
  console.log("Rendering NavbarMobileModal");

  function closeActiveModal() {
    setActiveModal("");
    // document.body.classList.remove("modal-open");
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
              alt=""
              className="navbar-mobile-modal__close"
              onClick={closeActiveModal}
            />
          </div>
        </div>
        <div className="navbar-mobile-modal__buttons">
          {isLoggedIn ? (
            <>
              <Link to="/saved-news" className="navbar-mobile-modal__link">
                <p
                  className="navbar-mobile-modal__home navbar-mobile-modal__home_logged-in"
                  onClick={closeActiveModal}
                >
                  Saved Articles
                </p>
              </Link>
              <button
                className="navbar-mobile-modal__signin"
                onClick={handleMobileSignout}
              >
                <p className="navbar-mobile-modal__signin-text">Sign out</p>
              </button>
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
