import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteDisplay from './Comp/Quote';
import QuoteList from './Comp/QuoteList';

const App = () => {
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null);
  const [savedQuotes, setSavedQuotes] = useState([]);

  const handleDelete = (index) => {
    const updatedQuotes = [...savedQuotes];
    updatedQuotes.splice(index, 1);
    setSavedQuotes(updatedQuotes);
  };

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      setQuote(result[0]);
    } catch (err) {
      setError('Could not fetch data');
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
    <div className='div1'>
      {error && <p>{error}</p>}
      <h1 className='title'>API Project</h1>
      <QuoteDisplay quote={quote} onSave={saveQuote} />
      <button onClick={fetchQuote}>Generate New Quote</button>
      <QuoteList quotes={savedQuotes} onDelete={handleDelete} />
    </div>
  );
};

export default App;
