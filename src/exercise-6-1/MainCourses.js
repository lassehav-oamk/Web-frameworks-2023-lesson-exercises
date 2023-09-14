import React from "react";
import "./Style.css";

export default function MainCourses() {
  /* This renders a list of main courses for a menu.
  Each main course has a name and a price.
  The list of main courses is passed as a prop to this component.
  The list of main courses is an array of objects.
  Each object has two properties: name and price.
  The name is a string.
  The price is a number.

  Main courses are rendered as a table.
  The table has two columns: name and price.
  The table has a header row.
  The table has a row for each main course.
  The name of the main course is rendered in the first column.
  The price of the main course is rendered in the second column.
  
  */

  return (
    <div>
      <h1>Main Courses</h1>
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
