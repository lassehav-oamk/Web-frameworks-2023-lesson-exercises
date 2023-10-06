import React, {useState } from 'react'

export default function UserFilter({ sendFilterText }) {
  const [filterText, setFilterText] = useState('');

  const executeFiltering = () => {
    console.log("click")
    sendFilterText(filterText);
  }
  
  return (
    <div>
      <input 
        type="text" 
        value={filterText} 
        onChange={(e) => setFilterText(e.target.value)}
      /> 
      <button onClick={executeFiltering }>Filter</button>
    </div>
  )
}
