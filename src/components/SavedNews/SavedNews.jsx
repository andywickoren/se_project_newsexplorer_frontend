import "./SavedNews.css";
import NavBar from "../Navbar/Navbar";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ newsCards }) {
  return (
    <>
      <NavBar />
      <SavedNewsHeader />
      <NewsCardList newsCards={newsCards}></NewsCardList>
    </>
  );
}

export default SavedNews;
