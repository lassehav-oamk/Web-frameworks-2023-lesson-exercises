import React, { useState } from 'react'

export default function Exercise5_4() {

  const [isVisible, setIsVisible] = useState("none");

  return (
    <div>
        <button onClick={() => {
          if(isVisible === 'block') {
            setIsVisible('none')
          } else {
            setIsVisible('block')
          }
          }}>This is the button</button>
        <p style={{ display: isVisible}}>This is the text paragraph</p>
      
      </div>
  )
}
