import "./NewsCardList.css";
import { useState, useContext } from "react";
import SavedCardsContext from "../../contexts/SavedCardsContext";
import { useLayout } from "../../contexts/LayoutContext";
import NewsCardLoggedIn from "../NewsCardLoggedIn/NewsCardLoggedIn";
import NewsCardSaved from "../NewsCardSaved/NewsCardSaved";
import NewsCardReadOnly from "../NewsCardReadOnly/NewsCardReadOnly";

function NewsCardList({ newsCards, isLoggedIn }) {
  const layout = useLayout();
  const { savedCards } = useContext(SavedCardsContext);
  const [cardsToShow, setCardsToShow] = useState(3);
  const renderedCards = newsCards.slice(0, cardsToShow);

  const handleShowMore = () => {
    setCardsToShow((prevCount) => prevCount + 3);
  };

  return (
    <div className="news-cards">
      {layout !== "SavedNews" && (
        <h2 className="news-cards__heading">Search Results</h2>
      )}
      <ul
        className={`news-card-list ${
          layout === "SavedNews" ? "news-card-list_saved-news" : ""
        }`}
      >
        {layout === "SavedNews"
          ? savedCards.map((card) => (
              <NewsCardSaved
                name={card.name}
                url={card.url}
                key={card.name}
                description={card.description}
                date={card.date}
                author={card.author}
                layout="SavedNews"
                query={card.query}
                isLoggedIn={isLoggedIn}
              />
            ))
          : renderedCards.map((card) =>
              isLoggedIn ? (
                <NewsCardLoggedIn
                  name={card.name}
                  url={card.imageUrl}
                  key={card.name}
                  description={card.description}
                  date={card.date}
                  author={card.author}
                  query={card.query}
                />
              ) : (
                <NewsCardReadOnly
                  name={card.name}
                  url={card.imageUrl}
                  key={card.name}
                  description={card.description}
                  date={card.date}
                  author={card.author}
                  query={card.query}
                  isLoggedIn={isLoggedIn}
                />
              )
            )}
      </ul>
      {/* Show More Button */}
      {layout !== "SavedNews" && (
        <div className="news-cards__show-more-button-container">
          <button
            className="news-cards__show-more-button"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default NewsCardList;
