import "./Main.css";
import NewsCard from "../NewsCard/NewsCard";
import showMore from "../../assets/show-more.png";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import Results from "../Results/Results";

function Main({
  newsCards,
  handleSigninClick,
  handleSearch,
  isLoading,
  noResults,
  isLoggedIn,
}) {
  return (
    <div className={`main ${isLoading && "main__is-loading"}`}>
      <Results
        newsCards={newsCards}
        isLoading={isLoading}
        noResults={noResults}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default Main;
