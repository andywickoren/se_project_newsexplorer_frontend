import "./CardSection.css";
import NewsCard from "../NewsCard/NewsCard";
import showMore from "../../assets/show-more.png";
import NewsCardList from "../NewsCardList/NewsCardList";
import Header from "../Header/Header";
import Results from "../Results/Results";

function CardSection({
  newsCards,
  handleSigninClick,
  handleSearch,
  isLoading,
  noResults,
  isLoggedIn,
}) {
  return (
    <section
      className={`card-section ${isLoading && "card-section__is-loading"}`}
    >
      <Results
        newsCards={newsCards}
        isLoading={isLoading}
        noResults={noResults}
        isLoggedIn={isLoggedIn}
      />
    </section>
  );
}

export default CardSection;
