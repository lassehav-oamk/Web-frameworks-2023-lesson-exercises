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
            <td>Water</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Coffee</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Coca cola</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
