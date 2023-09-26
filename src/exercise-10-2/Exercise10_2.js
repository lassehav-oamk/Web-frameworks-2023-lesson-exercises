import React, {useState, useEffect} from 'react'

export default function Exercise10_2() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
      });
  }, []);

  return (
    <div>
      <p>Random Quote:</p>
      <blockquote>{quote}</blockquote>
    </div>
  );
}
