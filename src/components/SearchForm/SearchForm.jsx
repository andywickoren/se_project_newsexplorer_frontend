import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ onSearch, setKeywords }) {
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState("");

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
      <div className="modal__input-wrapper">
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
    </form>
  );
}

export default SearchForm;
