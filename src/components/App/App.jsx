import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SigninModal from "../SigninModal/SigninModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [newsCards, setNewsCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  function handleCloseClick() {
    setActiveModal("");
  }

  function handleSigninClick() {
    setActiveModal("signin-modal");
  }

  function handleSignin() {
    console.log("signed in bro");
  }

  function handleSignup() {
    console.log("signed up bro");
  }

  function handleSignupClick() {
    setActiveModal("register-modal");
  }

  function handleSubmit() {
    console.log("you submitted bro");
  }

  function testCards() {
    const cardList = [
      {
        name: "item1",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item2",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item3",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item4",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item5",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item6",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
    ];
    return cardList;
  }

  return (
    <div className="app">
      {/* <Header></Header> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main
                testCards={testCards}
                handleSigninClick={handleSigninClick}
              />
              <About></About>
            </>
          }
        />
        <Route
          path="/saved-news"
          element={<SavedNews testCards={testCards}></SavedNews>}
        />
      </Routes>

      <Footer></Footer>
      {activeModal === "signin-modal" && (
        <SigninModal
          handleSignin={handleSignin}
          handleCloseClick={handleCloseClick}
          isOpen={activeModal === "signin-modal"}
          openRegisterModal={handleSignupClick}
        ></SigninModal>
      )}
      {activeModal === "register-modal" && (
        <RegisterModal
          handleSignup={handleSignup}
          handleCloseClick={handleCloseClick}
          isOpen={activeModal === "register-modal"}
          openSigninModal={handleSigninClick}
        ></RegisterModal>
      )}
    </div>
  );
}

export default App;
