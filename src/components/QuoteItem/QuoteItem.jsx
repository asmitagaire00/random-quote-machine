import React from 'react';
import './QuoteItem.css';

const QuoteItem = ({ quote, color }) => {
  const { text, author } = quote;
  return (
    <div className="quote-box">
      <blockquote className="blockquote">
        <p
          className="quote-box__text"
          style={{
            color: color,
          }}
        >
          {text}
        </p>
      </blockquote>

      <p
        className="quote-box__author"
        style={{
          color: color,
        }}
      >
        — {author}
      </p>
    </div>
  );
};

export default QuoteItem;
