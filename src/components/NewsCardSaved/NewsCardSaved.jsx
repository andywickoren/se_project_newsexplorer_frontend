import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import trashIcon from "../../assets/trash-icon.png";
import { useContext } from "react";

function NewsCardSaved(
  {
    //   name,
    //   url,
    //   description,
    //   date,
    //   author,
    //   layout,
    //   query,
    //   handleDelete,
    //   isLoggedIn,
  }
) {
  const uniqueKey = `${url}-${description.slice(0, 20)}`;
  const [isHovered, setIsHovered] = useState(false);
  const { savedCards, setSavedCards } = useContext(SavedCardsContext);

  return (
    <NewsCard name={name} url={url} date={date} author={author}>
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
        <p className="newsCard__label_delete-warning">Remove from saved</p>
      </div>
    </NewsCard>
  );
}

export default NewsCardSaved();
