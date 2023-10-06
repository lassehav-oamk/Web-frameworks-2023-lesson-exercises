import React from "react";

export default function MainCoursePizza() {
  return (
    <div>
      <h1>Pizza</h1>
      <table className={"menuTable"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Opera</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Margherita</td>
            <td>9,50</td>
          </tr>
          <tr>
            <td>Quattro</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
