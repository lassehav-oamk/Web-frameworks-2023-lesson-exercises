import React, { useState } from 'react'

export default function Exercise10_1() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Click button to increase counter</button>
      <p>Counter value is: { counter }</p>
    </div>
  )
}
