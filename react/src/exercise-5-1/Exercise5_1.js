import React from "react";
import { useState } from "react";

export default function Exercise5_1() {
  const [text, setText] = useState("This is the initial value");
  const [inputElementText, setInputElementText] = useState(
    "This is the initial value for input element"
  );

  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        Text input field:{" "}
        <input
          type="text"
          value={inputElementText}
          onChange={(event) => {
            console.log(event.target.value);
            setInputElementText(event.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          setText(inputElementText);
        }}
      >
        This is 5_1 button
      </button>
      <div style={{ padding: "10px", border: "1px solid black" }}>{text}</div>
    </div>
  );
}
