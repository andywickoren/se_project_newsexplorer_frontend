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
import ConfirmRegisterModal from "../ConfirmRegisterModal/ConfirmRegisterModal";
import { getItems } from "../../utils/api";
import Results from "../Results/Results";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);

  // const testCards = [{
  //   name: "item1",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
  // },
  // {
  //   name: "item2",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
  // },
  // {
  //   name: "item3",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
  // },
  // {
  //   name: "item4",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
  // },
  // {
  //   name: "item5",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
  // },
  // {
  //   name: "item6",
  //   imageUrl:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
  // }];

  // const apiKey = "460e8a428e8641e6b8648d256f9a2375";

  const handleSearch = (query) => {
    setIsLoading(true);
    getItems(query)
      .then((data) => {
        console.log(
          "is data.articles and array?",
          Array.isArray(data.articles)
        );
        if (!data.articles || data.articles.length === 0) {
          console.log("no articles found");
          setHasNoResults(true);
        }
        setNewsCards(
          data.articles.map((article) => ({
            name: article.title,
            imageUrl: article.urlToImage,
            date: article.publishedAt,
            description: article.content,
            author: article.author,
          }))
        );
      })
      .catch((err) => console.error("Error fetching news:", err))
      .finally(() => setIsLoading(false));
    setHasNoResults(false);
  };

  // useEffect(() => {
  //   setHasNoResults(false);
  // });

  // useEffect(() => {
  //   getItems()
  //     .then((data) => {
  //       setNewsCards(
  //         data.articles.map((article) => ({
  //           name: article.title,
  //           imageUrl: article.urlToImage,
  //           date: article.publishedAt,
  //           description: article.content,
  //           author: article.author,
  //         }))
  //       );
  //     })
  //     .catch(console.error);
  // }, []);

  function closeActiveModal() {
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
    setActiveModal("confirm-register-modal");
  }

  function handleSignupClick() {
    setActiveModal("register-modal");
  }

  function handleSubmit() {
    console.log("you submitted bro");
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                handleSigninClick={handleSigninClick}
                handleSearch={handleSearch}
              ></Header>
              {(isLoading || hasNoResults || newsCards.length > 0) && (
                <Main
                  // handleSearch={handleSearch}
                  newsCards={newsCards}
                  // handleSigninClick={handleSigninClick}
                  isLoading={isLoading}
                  noResults={hasNoResults}
                />
              )}
              <About></About>
            </>
          }
        />
        <Route
          path="/saved-news"
          element={<SavedNews newsCards={newsCards}></SavedNews>}
        />
      </Routes>

      <Footer></Footer>
      {activeModal === "signin-modal" && (
        <SigninModal
          handleSignin={handleSignin}
          handleCloseClick={closeActiveModal}
          isOpen={activeModal === "signin-modal"}
          openRegisterModal={handleSignupClick}
        ></SigninModal>
      )}
      {activeModal === "register-modal" && (
        <RegisterModal
          handleSignup={handleSignup}
          handleCloseClick={closeActiveModal}
          isOpen={activeModal === "register-modal"}
          openSigninModal={handleSigninClick}
        ></RegisterModal>
      )}
      {activeModal === "confirm-register-modal" && (
        <ConfirmRegisterModal
          openSigninModal={handleSigninClick}
          handleCloseClick={closeActiveModal}
        ></ConfirmRegisterModal>
      )}
    </div>
  );
}

export default App;
