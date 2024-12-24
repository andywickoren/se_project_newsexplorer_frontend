import "./Header.css";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import headerBackground from "../../assets/header-background.png";

function Header({ handleSigninClick }) {
  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <Navbar handleSigninClick={handleSigninClick}></Navbar>
      <div className="header__content">
        <h1 className="header__title">What's going on in the world?</h1>
        <p className="header__caption">
          Find the latest news on any topic and save them on your personal
          account.
        </p>
        <SearchForm></SearchForm>
      </div>
    </header>
  );
}

export default Header;
