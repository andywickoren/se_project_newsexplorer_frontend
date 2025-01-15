import userRectangle from "../../assets/user-rectangle.png";

function SavedNews() {
  return (
    <div className="navbar__saved-news-options">
      <p className="navbar__saved-articles-text">Saved Articles</p>
      <Link to="/" className="navbar__link">
        <button className="navbar__user-button">
          <img
            src={userRectangleSavedNews}
            alt=""
            className="navbar__user-rectangle_saved-news"
          />
          <div className="navbar__user-button-elements">
            <p className="navbar__user-button-text_saved-news"></p>
            {currentUser.name || "User"}
            <img
              src={union}
              alt=""
              className="navbar__user-button-union_saved-news"
            />
          </div>
        </button>
      </Link>
    </div>
  );
}

export default SavedNews;
