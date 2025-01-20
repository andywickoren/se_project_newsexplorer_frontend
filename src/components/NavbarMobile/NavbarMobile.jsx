import "./NavbarMobile.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLayout } from "../../contexts/LayoutContext";
import SavedNews from "../SavedNews/SavedNews";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

// function NavbarMobile(isLoggedIn) {
//   const layout = useLayout();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <div className="navbarmobile">
//       <div className="navbar__menu">
//         <button
//           className="navbar__menu-icon"
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//         >
//           ☰
//         </button>
//         {isMenuOpen && (
//           <div className="navbar__dropdown">
//             <Link to="/" className="navbar__dropdown-link">
//               Home
//             </Link>
//             {isLoggedIn ? (
//               <Link to="/saved-news" className="navbar__dropdown-link">
//                 Saved Articles
//               </Link>
//             ) : (
//               <button
//                 className="navbar__dropdown-button"
//                 onClick={handleSigninClick}
//               >
//                 Sign In
//               </button>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

export default NavbarMobile;
