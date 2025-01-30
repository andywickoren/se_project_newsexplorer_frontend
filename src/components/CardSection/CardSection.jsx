import "./CardSection.css";
import Results from "../Results/Results";

function CardSection({ newsCards, isLoading, noResults, isLoggedIn }) {
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
