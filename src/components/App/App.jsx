import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SigninModal from "../SigninModal/SigninModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfirmRegisterModal from "../ConfirmRegisterModal/ConfirmRegisterModal";
import { getItems } from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import SavedCardsContext from "../../contexts/SavedCardsContext";
import { LayoutContext } from "../../contexts/LayoutContext";
import { useLocation } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newsCards, setNewsCards] = useState([]);
  const [hasNoResults, setHasNoResults] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [keywords, setKeywords] = useState([]);

  const location = useLocation();

  const layout = location.pathname === "/saved-news" ? "SavedNews" : "Home";

  // const apiKey = "460e8a428e8641e6b8648d256f9a2375";

  const mockUser = {
    email: "email@gmail.com",
    username: "testuser",
    password: "password123",
    name: "Irene",
  };

  const [savedCards, setSavedCards] = useState([]);

  function login(email, password) {
    if (email === mockUser.email && password === mockUser.password) {
      const token = "mockToken123";
      localStorage.setItem("token", token);
      return { success: true, token };
    } else {
      return { success: false, message: "Invalid credentials" };
    }
  }

  const onLogin = (data) => {
    const { email, password } = data;
    if (!email || !password) {
      console.log("No username or password provided");
      return;
    }

    const res = login(email, password);

    if (res.success) {
      console.log("Login successful", res);

      setToken(res.token);

      const user = { email: mockUser.email, name: mockUser.name };

      setCurrentUser(user);
      console.log("Current User:", user);

      setIsLoggedIn(true);

      closeActiveModal();
    } else {
      console.log("Login failed:", res.message);
    }
  };

  function onLogout() {
    setCurrentUser("");
    setIsLoggedIn(false);
    localStorage.setItem("token", "");
    setToken("");
    setNewsCards([]);
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      const user = { email: mockUser.email, name: mockUser.name };
      setCurrentUser(user);
      setIsLoggedIn(true);
    }
  }, []);

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const formatToUpperCase = (str) => {
    return str ? str.toUpperCase() : "";
  };

  const handleSearch = (query) => {
    console.log("handleSearch", query);
    setIsLoading(true);
    getItems(query)
      .then((data) => {
        const filteredArticles = data.articles.filter(
          (article) => article.content !== "[Removed]"
        );

        if (!data.articles || data.articles.length === 0) {
          console.log("no articles found");
          setHasNoResults(true);
        }
        setNewsCards(
          filteredArticles.map((article) => ({
            name: article.title,
            imageUrl: article.urlToImage,
            date: formatDate(article.publishedAt),
            description: article.content,
            author: formatToUpperCase(article.source.name),
            query,
          }))
        );
      })
      .catch((err) => console.error("Error fetching news:", err))
      .finally(() => setIsLoading(false));
    setHasNoResults(false);
  };

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

  console.log(keywords);

  console.log(newsCards);

  return (
    <LayoutContext.Provider value={layout}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <SavedCardsContext.Provider value={{ savedCards, setSavedCards }}>
          <div className="app">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header
                      logout={onLogout}
                      handleSigninClick={handleSigninClick}
                      handleSearch={handleSearch}
                      isLoggedIn={isLoggedIn}
                      setKeywords={setKeywords}
                    ></Header>
                    {(isLoading || hasNoResults || newsCards.length > 0) && (
                      <Main
                        newsCards={newsCards}
                        isLoading={isLoading}
                        noResults={hasNoResults}
                        isLoggedIn={isLoggedIn}
                      />
                    )}
                    <About></About>
                  </>
                }
              />
              <Route
                path="/saved-news"
                element={
                  <SavedNews
                    handleSigninClick={handleSigninClick}
                    logout={onLogout}
                    isLoggedIn={isLoggedIn}
                    newsCards={newsCards}
                    keywords={keywords}
                  ></SavedNews>
                }
              />
            </Routes>

            <Footer></Footer>
            {activeModal === "signin-modal" && (
              <SigninModal
                onLogin={onLogin}
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
        </SavedCardsContext.Provider>
      </CurrentUserContext.Provider>
    </LayoutContext.Provider>
  );
}

export default App;
