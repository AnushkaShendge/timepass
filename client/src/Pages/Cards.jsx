import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";

function Cards({ quote }) {

  const [savedQuotes, setSavedQuotes] = useState([]);

  function saveQuote(quote) {
    setSavedQuotes((prevQuotes) => {
      const updatedQuotes = [...prevQuotes, quote];
      console.log("Updated saved quotes:", updatedQuotes);
      return updatedQuotes;
    });
    alert("Quote saved successfully!");
  }

  return (
    <div className="flex items-center justify-center h-64 cursor-pointer">
      <div className="w-64 h-64 rounded-md">
        <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-pink-300 via-purple-300 to-blue-300 p-4 rounded-md shadow-md">
          <h1 className="font-serif text-white mb-4 text-center">{quote}</h1>
          <FaCirclePlus 
            onClick={() => saveQuote(quote)} 
            size={30} 
            className="text-white cursor-pointer" 
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
