import React from "react";

import ToastShelf from "../ToastShelf/ToastShelf";
import FormComponent from "../FormComponent/FormComponent";

import ToastProvider from "../ToastProvider/ToastProvider";
import VariantProvider from "../VariantProvider/VariantProvider";
import MessageProvider from "../MessageProvider/MessageProvider";
import ControlWrapperContainer from "../ControlWrapperContainer/ControlWrapperContainer";

function ToastPlayground() {
  return (
    <ToastProvider>
      <VariantProvider>
        <MessageProvider>
          <FormComponent>
            <header>
              <img alt="Cute toast mascot" src="/toast.png" />
              <h1>Toast Playground</h1>
            </header>

            <ToastShelf />

            <ControlWrapperContainer />
          </FormComponent>
        </MessageProvider>
      </VariantProvider>
    </ToastProvider>
  );
}

export default ToastPlayground;
