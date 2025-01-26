import bookmarkUnmarked from "../../assets/bookmark-unmarked.png";
import bookmarkContainer from "../../assets/bookmark-container.png";
import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardReadOnly({
  name,
  url,
  key,
  description,
  date,
  author,
  query,
  isLoggedIn,
}) {
  console.log("NewsCardReadOnly");
  const [isHovered, setIsHovered] = useState(false);

  if (isHovered === true) {
    console.log("IS HOVERED TRUE");
  }

  return (
    <NewsCard
      name={name}
      url={url}
      date={date}
      description={description}
      author={author}
    >
      <div
        className="newsCard__bookmark-container_read-only"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <img
          className="newsCard__bookmark-container"
          src={bookmarkContainer}
          alt="save-icon read only"
        /> */}
        <img
          className="newsCard__bookmark newsCard__bookmark_read-only"
          src={bookmarkUnmarked}
          alt="bookmark unmarked"
        />
      </div>
      <div
        className={`newsCard__label-bookmark-read-only ${
          isHovered ? "newsCard__label-bookmark-read-only_hovered" : ""
        }`}
      >
        <p className="newsCard__login-message">Sign in to save</p>
      </div>
    </NewsCard>
  );
}

export default NewsCardReadOnly;
