import "./NewsCard.css";
import saveIconContainer from "../../assets/save-icon-container.png";
import saveIconBookmark from "../../assets/save-icon-bookmark.png";

function NewsCard({ name, url }) {
  return (
    <div className="newsCard__container">
      <div className="newsCard__image-container">
        <img src={url} alt="" className="newsCard__image" />
        <img
          className="newsCard__save-icon-container"
          src={saveIconContainer}
        />
        <img className="newsCard__save-icon-bookmark" src={saveIconBookmark} />
      </div>
    </div>
  );
}

export default NewsCard;
