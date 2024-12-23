import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

// const [newsCards, setNewsCards] = useState([]);

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

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Main testCards={testCards} />
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
