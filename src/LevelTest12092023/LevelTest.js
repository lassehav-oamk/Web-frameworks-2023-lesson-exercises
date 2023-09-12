import React, { useState } from 'react'

export default function LevelTest() {
    /*
    REACT LEVEL TEST

    The task is to create an react application, which has one button on screen and
    an empty 200x200 pixel rectangle (just a div with width, height, border and background-color).
    Initially the rectangle should be white.

    When the user clicks on the button the rectangle color should turn to red.

    To implement this you need to use
    - event handlers
    - state 
    - css styling in react

    Working time 15mins, start 12:45 -> 13:00
    */
    const [color, setColor] = useState("black");

    const thisTheButtonClick = () => { 
        setColor("red");
    };


    return (
        <div>
            <h1>This is a react level test on 12.9.2023</h1>
            <button onClick={thisTheButtonClick}>This is the button</button>
            <div style={{ width: '200px', height: '200px', border: '1px solid black', backgroundColor: color}}></div>

            <p>Some text</p>
        </div>
  )
}
