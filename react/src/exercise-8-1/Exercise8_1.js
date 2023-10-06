import React, { useState } from 'react'

export default function Exercise8_1() {
    const [newBookTextValue, setNewBookTextValue] = useState("");
    const [books, setBooks] = useState([
        'Book 1', 
        'Book 2', 
        'Book 3',
        'Book 4',
        'Book 5'
      ]);

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
        <input type="text" value={newBookTextValue} onChange={ (event) => setNewBookTextValue(event.target.value) } />
        <button onClick={handleNewBookButtonPress}>add to list</button>
        <ul>
            {
                books.map(element => <li>{element}</li>)
            }
        </ul>

    </div>
  )
}
