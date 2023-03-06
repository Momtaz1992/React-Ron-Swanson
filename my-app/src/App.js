import React, { useState, useEffect } from 'react';
import "./styles.css";
function App() {
  const [quote, setQuote] = useState('');
  const [intervalID, setInterval]= useState('');
  function fetchQuote() {
    return fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => response.json())
      .then(json => json[0])
      .catch(error => {
        console.error('Error fetching quote:', error);
        return null;
      });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchQuote().then(newQuote => {
        setQuote(newQuote);
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <img
        src="https://media.giphy.com/media/tSVnUxoWoHC/giphy.gif"
        alt="ron"
      />
      <p>{quote}</p>
    </div>
  );
}



export default App;
