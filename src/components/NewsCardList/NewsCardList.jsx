import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ testCards }) {
  const cardsList = testCards();
  console.log(cardsList[0].imageUrl);
  return (
    <ul className="newsCardList">
      {cardsList.map((card) => (
        <NewsCard name={card.name} url={card.imageUrl} key={card.name} />
      ))}
    </ul>
  );
}

export default NewsCardList;
