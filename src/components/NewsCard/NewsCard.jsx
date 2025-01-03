import { useState } from "react";
import "./NewsCard.css";
import bookmarkContainer from "../../assets/bookmark-container.png";
import bookmarkUnmarked from "../../assets/bookmark-unmarked.png";
import bookmarkMarked from "../../assets/bookmark-marked.png";

function NewsCard({ name, date, url, description, author }) {
  const [isSaved, setisSaved] = useState(true);

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return new Intl.DateTimeFormat("en-US", {
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //   }).format(date);
  // };

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
