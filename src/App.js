import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

const App = () => { 
  const [quote, setQuote] = useState(null); 
  const [error, setError] = useState(null);

  useEffect(() => { 
    const fetchQuote = async () => { 
      try { 
        const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes'); 
        if (!response.ok) { 
          throw new Error(response.statusText); 
        } 
        const data = await response.json(); 
        setQuote(data); 
      } catch (err) { 
        setError('Could not fetch data'); 
        console.log(err.message); 
      } 
    }; 
    fetchQuote(); 
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>API Project</h1>
      {data ? (
          <div>
            <h2>{quote.quote}</h2>
            <p>{quote.author}</p>
          </div>
        ) : (
          <p>No quote available</p>
        )}
    </div>
  )
}
export default App;
