import React from "react";

import styles from "./FormComponent.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";
import { VariantContext } from "../VariantProvider/VariantProvider";
import { MessageContext } from "../MessageProvider/MessageProvider";

import { VARIANT_OPTIONS } from "../../constants/constants";

function FormComponent({ children }) {
  const { toastArr, setToastArr } = React.useContext(ToastContext);
  const { variantOption, setVariantOption } = React.useContext(VariantContext);
  const { message, setMessage } = React.useContext(MessageContext);

  function handleSubmit() {
    const newToast = {
      ...toastArr,
      id: crypto.randomUUID(),
      message: message,
      variantOption: variantOption,
    };
    const nextToast = [...toastArr, newToast];
    setToastArr(nextToast);
    setMessage("");
    setVariantOption(VARIANT_OPTIONS[0]);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={styles.wrapper}>
      {children}
    </form>
  );
}

export default FormComponent;
