import React from "react";

const SavedQuotes = ({ quotes, onDelete }) => {
  return (
    <div>
      <h2>Saved Quotes</h2>
      {quotes.length === 0 ? (
        <p>No saved quotes.</p>
      ) : (
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>
              <h3>{quote.quote}</h3>
              <p>{quote.author}</p>
              <button onClick={() => onDelete(index)}>Remove Quote</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedQuotes;
