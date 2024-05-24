import React from 'react';

const QuoteDisplay = ({ quote, onSave }) => {
  return (
    <div>
      {quote ? (
        <div>
          <h2>{quote.quote}</h2>
          <p>{quote.author}</p>
          <button onClick={onSave}>Save Quote</button>
        </div>
      ) : (
        <p>No quote available</p>
      )}
    </div>
  );
};

export default QuoteDisplay;
