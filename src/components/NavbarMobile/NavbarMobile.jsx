import "./NavbarMobile.css";
import { useState } from "react";
import { useLayout } from "../../contexts/LayoutContext";
import NavbarMobileModal from "../NavbarMobileModal/NavbarMobileModal";

function NavbarMobile({ isLoggedIn, handleSigninClick, logout }) {
  const layout = useLayout();
  console.log("Navbar Layout: ", layout);
  const [activeModal, setActiveModal] = useState("");
  function handlNavbarMenuClick() {
    console.log("handlingNavbar");
    document.body.classList.add("modal-open");
    setActiveModal("navbar-mobile-modal");
  }
  return (
    <>
      <div className="navbar-mobile">
        <div className="navbar-mobile__menu">
          <button
            className={
              layout === "SavedNews"
                ? "navbar-mobile__menu-icon_saved-news"
                : "navbar-mobile__menu-icon"
            }
            onClick={handlNavbarMenuClick}
          >
            ☰
          </button>
        </div>
      </div>
      {activeModal === "navbar-mobile-modal" && (
        <NavbarMobileModal
          handleSigninClick={handleSigninClick}
          setActiveModal={setActiveModal}
          isLoggedIn={isLoggedIn}
          logout={logout}
        ></NavbarMobileModal>
      )}
    </>
  );
}

export default NavbarMobile;
