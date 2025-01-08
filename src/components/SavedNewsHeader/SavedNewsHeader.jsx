import "./SavedNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SavedNewsHeader() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <div className="saved-news-header">
      <p className="saved-news-header__label">Saved articles</p>
      <h2 className="saved-news-header__title">
        {currentUser.name}, you have 5 saved articles
      </h2>
      <p
        className="saved-news-header__caption"
        onClick={(e) => {
          console.log(currentUser);
        }}
      >
        By keywords:{" "}
        <span className="saved-news-header__keywords">
          Nature, Yellowstone, and 2 others{" "}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
