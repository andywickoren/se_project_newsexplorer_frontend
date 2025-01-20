import "./SavedNews.css";
import NavBar from "../Navbar/Navbar";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

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
      <NewsCardList newsCards={newsCards}></NewsCardList>
    </>
  );
}

export default SavedNews;
