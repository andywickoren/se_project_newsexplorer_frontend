import { useState } from "react";
import "./NewsCard.css";
import bookmarkContainer from "../../assets/bookmark-container.png";
import bookmarkUnmarked from "../../assets/bookmark-unmarked.png";
import bookmarkMarked from "../../assets/bookmark-marked.png";
import { useContext } from "react";
import SavedCardsContext from "../../contexts/SavedCardsContext";
import { useLayout } from "../../contexts/LayoutContext";
import trashIcon from "../../assets/trash-icon.png";
import trashHover from "../../assets/trash-hover.png";

function NewsCard({
  name,
  date,
  url,
  description,
  author,
  query,
  handleDelete,
}) {
  const layout = useLayout();
  console.log("NewsCard Layout: ==========> ", layout);
  const { savedCards, setSavedCards } = useContext(SavedCardsContext);
  const uniqueKey = `${url}-${description.slice(0, 20)}`;
  //this unique key property will be added to the savedCards so we can perform the check because the
  //api doesn't give a good id property; the id property is often basic word and the other properties could conceivably have duplicates as well
  const isSaved = savedCards.some((card) => card.uniqueKey === uniqueKey);
  const [isHovered, setIsHovered] = useState(false);

  function handleSave() {
    if (!isSaved) {
      setSavedCards([
        ...savedCards,
        { uniqueKey, name, date, url, description, author, query },
      ]);
    } else {
      setSavedCards(savedCards.filter((card) => card.uniqueKey !== uniqueKey));
    }
  }

  return (
    <div className="newsCard__container">
      <div className="newsCard__image-container">
        <img src={url} alt={name} className="newsCard__image" />
        {layout === "SavedNews" ? (
          <>
            <div className="newsCard__label">
              <p
                className={`newsCard__keyword ${
                  isHovered ? "newsCard__keyword_on-trash-hover" : ""
                }`}
              >
                {query.charAt(0).toUpperCase() + query.slice(1)}
              </p>
            </div>
            <div
              className="newsCard__trash-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={trashIcon}
                alt="trash icon"
                className="newsCard__trash-icon"
                onClick={() => handleDelete(uniqueKey)}
              />
            </div>
            <div
              className={`newsCard__label_delete ${
                isHovered ? "newsCard__label_delete_on-trash-hover" : ""
              }`}
            >
              <p className="newsCard__label_delete-warning">
                Remove from saved
              </p>
            </div>
          </>
        ) : (
          <>
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
                onClick={handleSave}
              />
            )}
          </>
        )}
      </div>
      <div className="newsCard__info">
        <div className="newsCard__date">{date}</div>
        <h3 className="newsCard__title">{name}</h3>
        <p className="newsCard__description">{description}</p>
        <footer className="newsCard__footer">{author}</footer>
      </div>
    </div>
  );
}

export default NewsCard;
