import "./SavedNews.css";
import NavBar from "../Navbar/Navbar";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({
  newsCards,
  keywords,
  isLoggedIn,
  logout,
  handleSigninClick,
}) {
  return (
    <>
      <NavBar
        isLoggedIn={isLoggedIn}
        logout={logout}
        handleSigninClick={handleSigninClick}
      />
      <SavedNewsHeader keywords={keywords} />
      <div className="saved-news-cards">
        <NewsCardList newsCards={newsCards}></NewsCardList>
      </div>
    </>
  );
}

export default SavedNews;
