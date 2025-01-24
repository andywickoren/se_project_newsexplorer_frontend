import "./SearchForm.css";
import { useState, useEffect } from "react";

function SearchForm({ onSearch, setKeywords }) {
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState("");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 685);
    };
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setSearchError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      setSearchError("Please enter a keyword");
    } else {
      onSearch(query);

      const newKeywords = query.trim().split(/\s+/);

      setKeywords((prevKeywords) => {
        const uniqueKeywords = newKeywords.filter(
          (word) => !prevKeywords.includes(word)
        );
        return [...prevKeywords, ...uniqueKeywords];
      });
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      {!isSmallScreen ? (
        <div className="search-form__input-wrapper">
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            aria-label="Search topics"
            onChange={handleChange}
          />
          <span className="search-form__error-message">{searchError}</span>
          <button type="submit" className="search-form__button">
            Search
          </button>
        </div>
      ) : (
        <div className="search-form__input-wrapper">
          <input
            type="text"
            className="search-form__input"
            placeholder="Enter topic"
            aria-label="Search topics"
            onChange={handleChange}
          />
          <span className="search-form__error-message">{searchError}</span>
          <button type="submit" className="search-form__button">
            Submit
          </button>
        </div>
      )}
    </form>
  );
}

export default SearchForm;
