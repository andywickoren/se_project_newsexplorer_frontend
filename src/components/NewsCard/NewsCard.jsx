import "./NewsCard.css";

function NewsCard({ name, url, date, description, author, children }) {
  return (
    <div className="newsCard">
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
