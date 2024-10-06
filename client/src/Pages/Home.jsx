import { useState, useEffect } from "react";
import Cards from "./Cards";

function Home() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    try {
      const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = await response.json(); 
      setQuote(data[0]);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  }

  return (
    <div className="h-screen w-full bg-purple-500 flex flex-col items-center justify-center">
      <h1 className="text-white font-bold text-4xl mb-2">Our Quotes</h1>
      <div className="text-sm text-white mb-6">We provide a variety of quotes</div>
      <div className="p-10 mt-6">
        <Cards quote={quote} />
      </div>
    </div>
  );
}

export default Home;
