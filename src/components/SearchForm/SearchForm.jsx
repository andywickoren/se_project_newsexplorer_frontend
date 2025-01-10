import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ onSearch, setKeywords }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);

    const newKeywords = query.trim().split(/\s+/);

    setKeywords((prevKeywords) => {
      const uniqueKeywords = newKeywords.filter(
        (word) => !prevKeywords.includes(word)
      );
      return [...prevKeywords, ...uniqueKeywords];
    });
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        aria-label="Search topics"
        onChange={handleChange}
      />
      <button type="submit" className="search-form__button">
        Submit
      </button>
    </form>
  );
}

export default SearchForm;
