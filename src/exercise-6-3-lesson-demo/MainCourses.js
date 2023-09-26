import React from "react";
import "./Style.css";
import MainCoursePizza from "./MainCoursePizza";
import MainCoursePasta from "./MainCoursePasta";
import styles from './HorizontalMenu.module.css'
import { Link, Route, Routes } from "react-router-dom";

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
        <div>
          <Link to="hamburger">Hamburger</Link>
        </div>
      </div>
      <Routes>
        <Route path="pizza" element={<MainCoursePizza />} />
        <Route path="pasta" element={<MainCoursePasta />} />
      </Routes>

    </div>
  );
}
