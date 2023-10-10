import React, { useEffect, useState } from 'react'

export default function ListView() {
  const [tireSets, setTireSets] = useState([]);

  useEffect( () => {
    fetch('http://localhost:3001/tiresets')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setTireSets(data);
      });
  }, []);

  return (
    <div>
      <h1>Tire Service App</h1>
      <div>Customer tire sets</div>
      <div className="tire-sets">
        <table>
          <thead>
            <tr>
              <th>Customer name</th>
              <th>Registration</th>
              <th>Tires in set</th>
            </tr>
          </thead>
          <tbody>
            { tireSets.map(tireSet => (<tr key={tireSet.id}>
              <td>{tireSet.customerName}</td>
              <td>{tireSet.registrationNumber}</td>
              <td>{tireSet.tiresInSet}</td>
            </tr>)) }            
          </tbody>
        </table>
      </div>
    </div>
  );
}
