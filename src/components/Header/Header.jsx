import "./Header.css";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import headerBackground from "../../assets/header-background.png";

function Header({ handleSigninClick, handleSearch, isLoggedIn, setKeywords }) {
  const layout = "Home";
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <Navbar
        handleSigninClick={handleSigninClick}
        layout={layout}
        isLoggedIn={isLoggedIn}
      ></Navbar>
      <div className="header__content">
        <div className="header__title_wrapper">
          <h1 className="header__title">What's going on in the world?</h1>
          <p className="header__caption">
            Find the latest news on any topic and save them on your personal
            account.
          </p>
        </div>
        <div className="header__search-form">
          <SearchForm
            onSearch={handleSearch}
            setKeywords={setKeywords}
          ></SearchForm>
        </div>
      </div>
    </header>
  );
}

export default Header;
