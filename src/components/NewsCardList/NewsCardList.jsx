import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ newsCards, layout }) {
  console.log(newsCards);
  const firstTenCards = newsCards.slice(0, 10);
  // return (
  //   <ul
  //     className={`news-card-list ${
  //       layout === "SavedNews" ? "news-card-list_saved-news" : ""
  //     }`}
  //   >
  //     {cardsList.map((card) => (
  //       <NewsCard name={card.name} url={card.imageUrl} key={card.name} />
  //     ))}
  //   </ul>
  // );
  return (
    <div>
      <ul
        className={`news-card-list ${
          layout === "SavedNews" ? "news-card-list_saved-news" : ""
        }`}
      >
        {firstTenCards.map((card) => (
          <NewsCard
            name={card.name}
            url={card.imageUrl}
            key={card.name}
            description={card.description}
            date={card.publishedAt}
            author={card.author}
          />
        ))}
      </ul>
    </div>
  );
}

export default NewsCardList;
