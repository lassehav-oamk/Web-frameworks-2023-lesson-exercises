import React from "react";
import image71 from "./assets/image71.png";

export default function Exercise7_1() {
  return (
    <div>
      <h1>Hello Asset World</h1>
      <p>
        Here below should be an image used from the assets forlder in the create
        react app project
      </p>
      <img src={image71} alt="image71" />
    </div>
  );
}
