import React, { useState, useEffect } from "react";
import "./App.css";
import SavedQuotes from "./Comp/Quote";
import "./App.css"

const App = () => {
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null);
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://api.breakingbadquotes.xyz/v1/quotes"
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setQuote(result[0]);
    } catch (err) {
      setError("Could not fetch data");
      console.log(err.message);
    }
  };

  const saveQuote = () => {
    if (quote) {
      setSavedQuotes((prevSavedQuotes) => [...prevSavedQuotes, quote]);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>API Project</h1>
      <div>
        {quote ? (
          <div>
            <h2>{quote.quote}</h2>
            <p>{quote.author}</p>
            <button onClick={saveQuote}>Save Quote</button>
          </div>
        ) : (
          <p>No quote available</p>
        )}
      </div>
      <button onClick={fetchQuote}>Generate New Quote</button>
      <SavedQuotes quotes={savedQuotes} />
    </div>
  );
};

export default App;
