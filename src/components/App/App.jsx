import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import Preloader from "../Preloader/Preloader";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [newsCards, setNewsCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function testCards() {
    const cardList = [
      {
        name: "item1",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item2",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item3",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item4",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item5",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
      {
        name: "item6",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3e-rpzenbY1X-ForXYQLTGs6hWol6_qf9gA&s",
      },
    ];
    return cardList;
  }

  return (
    <div className="app">
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<Main testCards={testCards} />} />
        <Route
          path="/saved-news"
          element={<SavedNews testCards={testCards}></SavedNews>}
        />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
