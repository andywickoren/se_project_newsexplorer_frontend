import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import showMore from "../../assets/show-more.png";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";

function Main({ testCards, handleSigninClick }) {
  const layout = "Home";
  return (
    <>
      <Header handleSigninClick={handleSigninClick}></Header>
      <div className="main">
        <h2 className="main__heading">Search Results</h2>
        <NewsCardList testCards={testCards} layout={layout} />
        <div className="main__show-more-button-container">
          <button className="main__show-more-button">Show More</button>
        </div>
      </div>
    </>
  );
}

export default Main;
