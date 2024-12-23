import "./SavedNews.css";
import NavBar from "../Navbar/Navbar";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function SavedNews({ testCards }) {
  return (
    <>
      <NavBar></NavBar>
      <NewsCardList testCards={testCards}></NewsCardList>
      <Footer></Footer>
    </>
  );
}

export default SavedNews;
