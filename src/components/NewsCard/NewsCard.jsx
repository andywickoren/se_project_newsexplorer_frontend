import { useState } from "react";
import "./NewsCard.css";
import bookmarkContainer from "../../assets/bookmark-container.png";
import bookmarkUnmarked from "../../assets/bookmark-unmarked.png";
import bookmarkMarked from "../../assets/bookmark-marked.png";

function NewsCard({ name, url }) {
  const [isSaved, setisSaved] = useState(true);
  return (
    <div className="newsCard__container">
      <div className="newsCard__image-container">
        <img src={url} alt="" className="newsCard__image" />
        <img className="newsCard__bookmark-container" src={bookmarkContainer} />
        {!isSaved ? (
          <img className="newsCard__bookmark_unmarked" src={bookmarkUnmarked} />
        ) : (
          <img className="newsCard__bookmark_unmarked" src={bookmarkMarked} />
        )}
      </div>
    </div>
  );
}

export default NewsCard;
