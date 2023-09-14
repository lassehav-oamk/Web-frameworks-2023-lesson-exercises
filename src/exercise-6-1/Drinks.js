import React from "react";
import "./Style.css";

export default function Drinks() {
  return (
    <div>
      <h1>Drinks</h1>
      <table className={"menuTable"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chicken</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Beef</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Pork</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
