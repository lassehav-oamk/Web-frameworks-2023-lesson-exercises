import React from "react";

export default function AlertButton({ alertText }) {
  return (
    <button
      onClick={() => {
        console.log(alertText);
        alert("This is alert from AlertButton");
      }}
    >
      This is Alert Button Exercise 4_4
    </button>
  );
}
