import "./SearchForm.css";
import searchField from "../../assets/search-field.png";
function SearchForm() {
  return (
    <div className="search-form">
      <img
        src={searchField}
        alt="Search"
        className="search-form__search-field"
      />
    </div>
  );
}

export default SearchForm;
