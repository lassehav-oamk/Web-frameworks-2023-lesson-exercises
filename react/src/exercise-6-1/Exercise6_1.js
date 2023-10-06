import React from "react";
import MainCourses from "./MainCourses";
import Drinks from "./Drinks";
import styles from "./HorizontalMenu.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Exercise6_1() {
  return (
    <BrowserRouter>
      <div>
        <h1>Exercise 6.1</h1>
        <div>
          <div className={styles.menu}>
            <div>
              <Link to="/">Main courses</Link>
            </div>
            <div>
              <Link to="/drinks">Drinks</Link>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<MainCourses />} />
            <Route path="/drinks" element={<Drinks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
