// import React, { createContext, useState, useContext } from "react";

// const CardsContext = createContext();

// export const CardsProvider = ({ children }) => {
//   const [savedCards, setSavedCards] = useState([]);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleDelete = (uniqueKey) => {
//     setSavedCards((prevCards) =>
//       prevCards.filter((card) => card.uniqueKey !== uniqueKey)
//     );
//   };

//   const handleSave = (newCard) => {
//     setSavedCards((prevCards) => [...prevCards, newCard]);
//   };

//   const contextValue = {
//     savedCards,
//     handleDelete,
//     handleSave,
//     setIsHovered,
//   };

//   return (
//     <CardsContext.Provider value={contextValue}>
//       {children}
//     </CardsContext.Provider>
//   );
// };

// export const useCards = () => useContext(CardsContext);
