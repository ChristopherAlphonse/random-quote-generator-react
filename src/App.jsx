import React, { useState } from 'react';
import './style.css';

const quotes = [
  'Age is of no importance unless you’re a cheese. ',

  'Change is not a four letter word… but often your reaction to it is',
  
  ,
  'Every tattoo is temporary, because we’re all slowly dying.',

  'I am an early bird and a night owl… so I am wise and I have worms.',

  'I used to think I was indecisive, but now I’m not so sure.',
  'When tempted to fight fire with fire, remember that the Fire Department usually uses water.',
  'it could be that your purpose in life is to serve as a warning to others.',
  'Never put off until tomorrow what you can do the day after tomorrow.',
];

const App = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const randomQuoteGen = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <>
      <div>
        funny Quotes: <span className="quote"> {quote} </span>
      </div>
      <button onClick={randomQuoteGen}> Click me for the next quote</button>
    </>
  );
};

export default App;
