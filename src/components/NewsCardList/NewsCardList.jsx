import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useState } from "react";

function NewsCardList({ newsCards, layout }) {
  console.log(newsCards);
  console.log("layout:  ===>", layout);
  const [cardsToShow, setCardsToShow] = useState(3); // Initial number of cards to show

  // Slice the newsCards array based on cardsToShow
  const renderedCards = newsCards.slice(0, cardsToShow);

  // Handle the "Show More" button click
  const handleShowMore = () => {
    setCardsToShow((prevCount) => prevCount + 3); // Increment cardsToShow by 3
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
        {renderedCards.map((card) => (
          <NewsCard
            name={card.name}
            url={card.imageUrl}
            key={card.name}
            description={card.description}
            date={card.publishedAt}
            author={card.author}
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
