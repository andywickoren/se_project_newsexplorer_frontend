import "./SavedNewsHeader.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import SavedCardsContext from "../../contexts/SavedCardsContext";

function SavedNewsHeader() {
  const { currentUser } = useContext(CurrentUserContext);
  const { savedCards } = useContext(SavedCardsContext);

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const extractKeywords = (cards) => {
    const allKeywords = cards
      .flatMap((card) => card.query.split(/\s+/))
      .filter((word, index, arr) => arr.indexOf(word) === index)
      .map(capitalizeFirstLetter);
    return allKeywords;
  };

  const formatKeywords = (keywords) => {
    if (keywords.length === 0) return "No Searches Yet";
    if (keywords.length === 1) return keywords[0];
    const [first, second, ...rest] = keywords;
    return `${first}, ${second}, and ${rest.length} others`;
  };

  const keywords = extractKeywords(savedCards);

  return (
    <div className="saved-news-header">
      <p className="saved-news-header__label">Saved articles</p>
      <h2 className="saved-news-header__title">
        {currentUser.name}, you have {savedCards.length} saved articles
      </h2>
      <p
        className="saved-news-header__caption"
        onClick={(e) => {
          console.log(currentUser);
        }}
      >
        By keywords:{" "}
        <span className="saved-news-header__keywords">
          {formatKeywords(keywords)}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
