import "./SavedNews.css";
import NavBar from "../Navbar/Navbar";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function SavedNews({ testCards }) {
  const layout = "SavedNews";
  return (
    <>
      <NavBar layout={layout}></NavBar>
      <SavedNewsHeader></SavedNewsHeader>
      <NewsCardList testCards={testCards} layout={layout}></NewsCardList>
      {/* <Footer></Footer> */}
    </>
  );
}

export default SavedNews;
