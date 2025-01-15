import { useState } from "react";
import "./NewsCard.css";

import { useContext } from "react";
import SavedCardsContext from "../../contexts/SavedCardsContext";
import { useLayout } from "../../contexts/LayoutContext";
import trashIcon from "../../assets/trash-icon.png";
import trashHover from "../../assets/trash-hover.png";

function NewsCard({ name, url, date, description, author, children }) {
  const uniqueKey = url;
  //this unique key property will be added to the savedCards so we can perform the check because the
  //api doesn't give a good id property; the id property is often basic word and the other properties could conceivably have duplicates as well
  // const isSaved = savedCards.some((card) => card.uniqueKey === uniqueKey);
  // const [isHovered, setIsHovered] = useState(false);

  // function handleSave() {
  //   if (!isSaved) {
  //     setSavedCards([
  //       ...savedCards,
  //       { uniqueKey, name, date, url, description, author, query },
  //     ]);
  //   } else {
  //     setSavedCards(savedCards.filter((card) => card.uniqueKey !== uniqueKey));
  //   }
  // }

  return (
    <div className="newsCard__container">
      <div className="newsCard__image-container">
        <img src={url} alt={name} className="newsCard__image" />
      </div>
      {children && <div className="newsCard__details">{children}</div>}
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
