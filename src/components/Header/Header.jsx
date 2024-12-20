import "./Header.css";
import Navigation from "../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";

function Header({}) {
  return (
    <header className="header">
      <Navigation></Navigation>
      <h1 className="header__title">What's going on in the world?</h1>
      <p className="header__caption">
        Find the latest news on any topic and save them on your personal
        account.
      </p>
      <SearchForm></SearchForm>
    </header>
  );
}

export default Header;

{
  /* <div className="header__left">
        <Link to="/">
          <img src={logo} alt="Header logo" className="header__logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        {!isLoggedIn ? (
          <>
            <button
              onClick={handleSignUpClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Sign Up
            </button>
            <button
              onClick={handleLoginClick}
              type="button"
              className="header__add-clothes-btn"
            >
              Log in
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleAddClick}
              type="button"
              className="header__add-clothes-btn"
            >
              + Add Item
            </button>
            <Link to="/profile" className="header__link">
              <div className="header__user-container">
                <p className="header__username">{currentUser.name}</p>
                <Avatar sizeClass="avatar-small" />
              </div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
} */
}
