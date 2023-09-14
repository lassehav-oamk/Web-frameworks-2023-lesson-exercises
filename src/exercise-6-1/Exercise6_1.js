import React from "react";
import MainCourses from "./MainCourses";
import Drinks from "./Drinks";
import styles from "./HorizontalMenu.module.css";

export default function Exercise6_1() {
  return (
    <div>
      <h1>Exercise 6.1</h1>
      <div>
        <div className={styles.menu}>
          <div>Main courses</div>
          <div>Drinks</div>
        </div>
        <MainCourses />
        <Drinks />
      </div>
    </div>
  );
}
