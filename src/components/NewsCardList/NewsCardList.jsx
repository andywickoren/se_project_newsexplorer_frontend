import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ testCards, layout }) {
  const cardsList = testCards();
  console.log(cardsList[0].imageUrl);
  return (
    <ul
      className={`news-card-list ${
        layout === "SavedNews" ? "news-card-list_saved-news" : ""
      }`}
    >
      {cardsList.map((card) => (
        <NewsCard name={card.name} url={card.imageUrl} key={card.name} />
      ))}
    </ul>
  );
}

export default NewsCardList;
