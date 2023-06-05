import React from "react";

import ToastShelf from "../ToastShelf/ToastShelf";
import FormComponent from "../FormComponent/FormComponent";

import ControlWrapperContainer from "../ControlWrapperContainer/ControlWrapperContainer";

function ToastPlayground() {
  return (
    <FormComponent>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <ControlWrapperContainer />
    </FormComponent>
  );
}

export default ToastPlayground;
