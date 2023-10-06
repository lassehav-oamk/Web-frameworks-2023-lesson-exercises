import React from "react";

export default function GeneralButton({
  buttonText = "This is General Button",
  buttonAction = () => {
    console.log("Not yet implemented");
  },
  backgroundColor = "red",
}) {
  return (
    <div
      style={{
        fontSize: "16px",
        fontWeight: 700,
        border: "4px solid black",
        backgroundColor: backgroundColor,
      }}
      onClick={buttonAction}
    >
      {buttonText}
    </div>
  );
}
