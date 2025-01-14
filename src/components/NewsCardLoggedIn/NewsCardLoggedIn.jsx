import bookmarkUnmarked from "../../assets/bookmark-unmarked.png";
import bookmarkMarked from "../../assets/bookmark-marked.png";
import bookmarkContainer from "../../assets/bookmark-container.png";
import SavedCardsContext from "../../contexts/SavedCardsContext";
import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
// import { useCards } from "../../contexts/CardsContext";

function NewsCardLoggedIn({ name, url, description, date, author, query }) {
  const { savedCards, setSavedCards } = useContext(SavedCardsContext);
  console.log(savedCards);
  const uniqueKey = `${url}-${description.slice(0, 20)}`;
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
        className="newsCard__bookmark-container"
        src={bookmarkContainer}
        alt={!isSaved ? "unsaved icon" : "saved icon"}
      />
      {!isSaved ? (
        <img
          className="newsCard__bookmark newsCard__bookmark_unmarked"
          src={bookmarkUnmarked}
          onClick={handleSave}
        />
      ) : (
        <img
          className="newsCard__bookmark newsCard__bookmark_marked"
          src={bookmarkMarked}
          onClick={handleSave()}
        />
      )}
    </NewsCard>
  );
}

export default NewsCardLoggedIn;