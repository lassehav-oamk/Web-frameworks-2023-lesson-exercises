import React from "react";
import styles from "./HorizontalMenu.module.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Pasta from "./MainCoursePasta";
import Pizza from "./MainCoursePizza";

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
      <div className={styles.menu}>
        <div>
          <Link to="pizza">Pizza</Link>
        </div>
        <div>
          <Link to="pasta">Pasta</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="pizza" element={<Pizza />} />
          <Route path="pasta" element={<Pasta />} />
          <Route index element={<Navigate to="pizza" />} />
        </Routes>
      </div>
    </div>
  );
}
