import React, { useState } from 'react'

export default function Exercise8_3() {
    const [newBookTextValue, setNewBookTextValue] = useState("");
    const [books, setBooks] = useState([
        'Introduction to Programming with Java', 
        'Master Software Design', 
        'Javascript for Beginners',
        'JavaScript Cookbook',
        'JavaScript: The Good Parts'
      ]);
    const [bookFilterString, setBookFilterString] = useState("");

    const handleNewBookButtonPress = () => {
        console.log('button pressed, value of text field is ' + newBookTextValue);

        // clone the existing array into an new array
        const newBooksArray = [ ...books ];

        // add the newBookTextValue into the new array
        newBooksArray.push(newBookTextValue);

        // update the books state with the new array
        setBooks(newBooksArray);        
    };

  return (
    <div>
        <div>
          <input type="text" value={newBookTextValue} onChange={ (event) => setNewBookTextValue(event.target.value) } />
          <button onClick={handleNewBookButtonPress}>add to list</button>
        </div>
        <div>
          Search for books: <input type="text" value={bookFilterString} onChange={e => setBookFilterString(e.target.value)}/>
        </div>
        
        <ul>
            {
                books
                  .filter(book => book.toLowerCase().includes(bookFilterString.toLowerCase().trim()))
                  .map(element => <li>{element}</li>)
            }
        </ul>

    </div>
  )
}
