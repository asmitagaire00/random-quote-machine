import React, { useState, useEffect } from 'react';
import { colors } from '../../colors';

import QuoteItem from '../QuoteItem/QuoteItem';
import './QuoteGenerate.css';

function QuoteGenerate({ color, setColor }) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    fetch('https://type.fit/api/quotes')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setQuote(result[Math.floor(Math.random() * result.length)]);
      })
      .catch((err) => {
        console.log("couldn't fetch the api", err);
      });
  };

  const handleClick = (e) => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
    getQuotes();
  };

  return (
    <div className="quote-generate">
      <QuoteItem quote={quote} color={color} />

      <div className="button-wrapper">
        <a
          href={`https://twitter.com/intent/tweet?text=${quote.text} -${quote.author}`}
          target="_blank"
          rel="noreferrer"
          className="tweet-quote"
        >
          <button
            style={{
              backgroundColor: color,
            }}
          >
            Tweet
          </button>
        </a>
        <button
          className="new-quote "
          onClick={handleClick}
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteGenerate;
