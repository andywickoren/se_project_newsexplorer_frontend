import "./SearchForm.css";
import rectangle2 from "../../assets/rectangle2.png";
import buttonImg from "../../assets/button.png";

function SearchForm() {
  return (
    <form className="search-form">
      {/* <div className="search-form__input-wrapper"> */}
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        aria-label="Search topics"
      />
      {/* Submit Button with Image */}
      <button type="submit" className="search-form__button">
        <img
          className="search-form__button-image"
          src={buttonImg}
          alt="Search"
        />
      </button>
      {/* </div> */}
    </form>
  );
}

export default SearchForm;

// import "./SearchForm.css";
// import searchField from "../../assets/search-field.png";
// function SearchForm() {
//   return (
//     <div className="search-form">
//       <img
//         src={searchField}
//         alt="Search"
//         className="search-form__search-field"
//       />
//     </div>
//   );
// }

{
  /* <div className="search-form">
<img src={searchIcon} alt="Search" className="search-form__icon" />
<input type="text" placeholder="Search..." className="search-form__input" />
<button className="search-form__button">Search</button>
</div> */
}

// export default SearchForm;
