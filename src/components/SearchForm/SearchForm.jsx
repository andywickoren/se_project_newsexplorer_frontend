import "./SearchForm.css";
import { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
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
