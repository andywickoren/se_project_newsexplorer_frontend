import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import showMore from "../../assets/show-more.png";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ testCards }) {
  return (
    <div className="main">
      <h2 className="main__heading">Search Results</h2>
      <NewsCardList testCards={testCards} />
      <button className="main__show-more-button">
        <img
          className="main__show-more-button-image"
          src={showMore}
          alt="Search"
        />
        <p className="main__show-more-button-text">Show More</p>
      </button>
    </div>
  );
}

export default Main;
