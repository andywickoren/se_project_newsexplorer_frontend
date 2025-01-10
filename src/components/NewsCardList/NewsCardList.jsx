import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";
import { useContext } from "react";
import SavedCardsContext from "../../contexts/SavedCardsContext";
import { useLayout } from "../../contexts/LayoutContext";

function NewsCardList({ newsCards }) {
  const layout = useLayout();
  // console.log(newsCards);
  console.log("NewCard layout =======> ", layout);
  const { savedCards, setSavedCards } = useContext(SavedCardsContext);
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
          layout === "SavedNews" ? "news-cards-list_saved-news" : ""
        }`}
      >
        {layout === "SavedNews"
          ? savedCards.map((card) => (
              <NewsCard
                name={card.name}
                url={card.url}
                key={card.name}
                description={card.description}
                date={card.date}
                author={card.author}
                layout="SavedNews"
                query={card.query}
              />
            ))
          : renderedCards.map((card) => (
              <NewsCard
                name={card.name}
                url={card.imageUrl}
                key={card.name}
                description={card.description}
                date={card.publishedAt}
                author={card.author}
                query={card.query}
              />
            ))}
      </ul>
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
