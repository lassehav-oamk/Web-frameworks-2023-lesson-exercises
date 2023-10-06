import React from "react";
import MainCoursesMenu from "./MainCoursesMenu";
import Drinks from "./Drinks";
import styles from "./HorizontalMenu.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

export default function Exercise6_3() {
  return (
    <BrowserRouter>
      <div>
        <h1>Exercise 6.3</h1>
        <div>
          <div className={styles.menu}>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/main-courses">Main courses</Link>
            </div>
            <div>
              <Link to="/drinks">Drinks</Link>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="main-courses/*" element={<MainCoursesMenu />} />
            <Route path="drinks" element={<Drinks />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
