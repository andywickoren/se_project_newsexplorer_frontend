import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        aria-label="Search topics"
      />
      <button type="submit" className="search-form__button">
        Submit
      </button>
    </form>
  );
}

export default SearchForm;
