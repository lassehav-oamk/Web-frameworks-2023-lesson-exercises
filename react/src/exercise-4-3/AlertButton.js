import React from "react";

export default function AlertButton() {
  return (
    <button
      onClick={() => {
        alert("This is alert from AlertButton");
      }}
    >
      This is Alert Button Exercise 4_3
    </button>
  );
}
