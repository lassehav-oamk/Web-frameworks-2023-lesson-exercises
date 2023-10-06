import React from "react";

export default function ConsoleButton() {
  return (
    <button
      onClick={() => {
        console.log("Hello from ConsoleButton!");
      }}
    >
      Click me, iam the Console Button
    </button>
  );
}
