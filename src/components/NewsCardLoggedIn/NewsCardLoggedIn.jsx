import bookmarkUnmarked from "../../assets/bookmark-unmarked.svg";
import bookmarkMarked from "../../assets/bookmark-marked.svg";
import bookmarkContainer from "../../assets/bookmark-container.png";
import SavedCardsContext from "../../contexts/SavedCardsContext";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardLoggedIn({ name, url, description, date, author, query }) {
  const { savedCards, setSavedCards } = useContext(SavedCardsContext);
  console.log(savedCards);
  const uniqueKey = url;
  const isSaved = savedCards.some((card) => card.uniqueKey === uniqueKey);

  const handleSave = () => {
    if (!isSaved) {
      setSavedCards([
        ...savedCards,
        { uniqueKey, name, date, url, description, author, query },
      ]);
      console.log("NewsCardLoggedIn", savedCards);
    } else {
      setSavedCards(savedCards.filter((card) => card.uniqueKey !== uniqueKey));
    }
  };
  return (
    <NewsCard
      name={name}
      url={url}
      date={date}
      description={description}
      author={author}
    >
      <img
        className="news-card__bookmark-container"
        src={bookmarkContainer}
        alt={!isSaved ? "unsaved icon" : "saved icon"}
      />
      {!isSaved ? (
        <img
          className="news-card__bookmark news-card__bookmark_unmarked"
          src={bookmarkUnmarked}
          onClick={handleSave}
          alt="unmarked save button"
        />
      ) : (
        <img
          className="news-card__bookmark news-card__bookmark_marked"
          src={bookmarkMarked}
          onClick={handleSave}
          alt="marked save button"
        />
      )}
    </NewsCard>
  );
}

export default NewsCardLoggedIn;
