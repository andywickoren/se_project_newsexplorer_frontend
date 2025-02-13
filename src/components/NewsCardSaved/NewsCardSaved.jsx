import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import trashIcon from "../../assets/trash-icon.svg";
import { useContext } from "react";
import SavedCardsContext from "../../contexts/SavedCardsContext";

function NewsCardSaved({ name, url, description, date, author, query }) {
  const uniqueKey = url;
  const [isHovered, setIsHovered] = useState(false);
  const { savedCards, setSavedCards } = useContext(SavedCardsContext);
  console.log("SAVEDCARDS: ", savedCards);
  const handleDelete = (uniqueKey) => {
    setSavedCards(savedCards.filter((card) => card.uniqueKey !== uniqueKey));
  };

  return (
    <NewsCard
      name={name}
      url={url}
      date={date}
      author={author}
      description={description}
    >
      <div className="news-card__label">
        <p
          className={`news-card__keyword ${
            isHovered ? "news-card__keyword_on-trash-hover" : ""
          }`}
        >
          {query.charAt(0).toUpperCase() + query.slice(1)}
        </p>
      </div>
      <div
        className="news-card__trash-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={trashIcon}
          alt="trash icon"
          className="news-card__trash-icon"
          onClick={() => handleDelete(uniqueKey)}
        />
      </div>
      <div
        className={`news-card__label_delete ${
          isHovered ? "news-card__label_delete_on-trash-hover" : ""
        }`}
      >
        <p className="news-card__label_delete-warning">Remove from saved</p>
      </div>
    </NewsCard>
  );
}

export default NewsCardSaved;
