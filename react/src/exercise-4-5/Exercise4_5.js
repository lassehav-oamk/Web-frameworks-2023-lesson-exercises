import React from "react";
import GeneralButton from "./GeneralButton";

export default function Exercise4_5() {
  function saveButtonAction() {
    console.log("Save Button Clicked");
  }

  return (
    <div>
      <GeneralButton buttonText="Save Button" buttonAction={saveButtonAction} />
      <GeneralButton buttonText="Cancel" backgroundColor="gray" />
      <GeneralButton
        buttonText="Proceed"
        buttonAction={() => {
          console.log("Proceeding");
        }}
        backgroundColor="green"
      />
    </div>
  );
}
