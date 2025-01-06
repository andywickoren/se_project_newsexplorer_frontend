import "./NoResults.css";
import noResultsIcon from "../../assets/not-found_v1.png";

function NoResults() {
  return (
    <div className="no-results">
      <img
        className="no-results__image"
        src={noResultsIcon}
        alt="no results found"
      />
      <h3 className="no-results__label">Nothing Found</h3>
      <p className="no-results__message">
        Sorry, but nothing matched your search terms
      </p>
    </div>
  );
}

export default NoResults;
