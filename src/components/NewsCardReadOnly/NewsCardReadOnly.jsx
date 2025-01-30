import bookmarkUnmarked from "../../assets/bookmark-unmarked.svg";
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
        className="news-card__bookmark-container_read-only"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="news-card__bookmark news-card__bookmark_read-only"
          src={bookmarkUnmarked}
          alt="bookmark unmarked"
        />
      </div>
      <div
        className={`news-card__label-bookmark-read-only ${
          isHovered ? "news-card__label-bookmark-read-only_hovered" : ""
        }`}
      >
        <p className="news-card__login-message">Sign in to save</p>
      </div>
    </NewsCard>
  );
}

export default NewsCardReadOnly;
