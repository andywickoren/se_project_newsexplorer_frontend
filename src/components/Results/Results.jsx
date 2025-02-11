import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import "./Results.css";

function Results({ newsCards, isLoading, noResults, isLoggedIn }) {
  let content = null;

  if (isLoading) {
    content = (
      <div className="results__preloader">
        <Preloader />
      </div>
    );
  } else if (noResults) {
    content = (
      <div className="results__no-results">
        <NoResults />
      </div>
    );
  } else if (newsCards.length > 0) {
    content = (
      <NewsCardList isLoggedIn={isLoggedIn} newsCards={newsCards} />
    );
  }

  return <>{content}</>;
}

export default Results;
