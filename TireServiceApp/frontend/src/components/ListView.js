import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListView() {
  const [tireSets, setTireSets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tiresets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTireSets(data);
      });
  }, []);

  return (
    <div>
      <Link to={"/add-new-customer"}>
        <button>Add new customer tire set</button>
      </Link>
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
            {tireSets.map((tireSet) => (
              <tr key={tireSet.id}>
                <td>{tireSet.customerName}</td>
                <td>{tireSet.registrationNumber}</td>
                <td>{tireSet.tiresInSet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
